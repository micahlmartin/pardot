var request       = require('request');
var util          = require('util');
var Q             = require('q');
var errors        = require('./errors');
var Hoek          = require('hoek');

var ROOT_API_URL  = "https://pi.pardot.com/api";


function Client(options) {
  options.format = 'json';
  this.options = options;
}

Client.prototype.authenticate = function() {
  var deferred = Q.defer();

  var self = this;

  this.execute('/login/version/3', {
    email: this.options.email,
    password: this.options.password
  })
  .then(function(results) {
    if(results["@attributes"].stat !== 'ok') {
     return deferred.reject(errors.LOGIN_FAILED);
    }

    // Authenticated successfully
    self.apiKey = results.api_key;

    return deferred.resolve(self);
  })
  .fail(function(err) {
    return deferred.reject(err);
  }).done();

  return deferred.promise;
};

Client.prototype.execute = function(path, params) {
  var deferred = Q.defer();
  var self = this;

  // Set the authentication credentials for every request
  params.api_key  = self.apiKey;
  params.user_key = self.options.userKey;
  params.format   = 'json';

  var apiPath = util.format('%s%s', ROOT_API_URL, path);

  self.log('Sending request to ' + apiPath);
  self.log(params);

  request.post(
    apiPath,
    {form: params},
    function(err, response, body) {
      if(err) {
        self.log(err);
        return deferred.reject(err);
      }

      var parsedBody = JSON.parse(body);

      self.log("Received Response");
      self.log(parsedBody);

      deferred.resolve(JSON.parse(body));
    });

  return deferred.promise;
};

Client.prototype.searchProspects = function(params) {
  var self = this;

  return Q.fcall(function() {

    Hoek.assert(self.apiKey, 'Client must be authenticated');

    return self.execute('/prospect/version/3/do/query', params);
  });
};

Client.prototype.log = function(message) {
  if(this.options.debug) {
    console.log(message);
  }
};

module.exports = Client;
