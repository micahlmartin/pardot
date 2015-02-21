var Q         = require('q');
var Hoek      = require('hoek');
var auth      = require('./auth');
var Client    = require('./client');


var internals = {};

internals.api = function(client) {
  return {
    prospects: require('./prospects')(client),
  };
};

module.exports = function(options) {

  options = options || {};

  return Q.promise(function(resolve, reject) {

    Hoek.assert(options.userKey, 'userKey must be specified');
    Hoek.assert(options.email, 'email must be specified');
    Hoek.assert(options.password, 'password must be specified');

    var client = new Client(options);

    auth(client).authenticate().then(function() {
      resolve(internals.api(client));
    }).fail(function(err) {
      reject(err);
    });

  });
};
