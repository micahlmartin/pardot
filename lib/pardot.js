var Q = require('q');
var Hoek = require('hoek');


module.exports = {
  authenticate: function(options) {

    options = options || {};

    return Q.fcall(function() {

      Hoek.assert(options.userKey, 'userKey must be specified');
      Hoek.assert(options.email, 'email must be specified');
      Hoek.assert(options.password, 'password must be specified');

      return true;

    });

  }
};
