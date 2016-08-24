var Q       = require('q');

module.exports = function(client) {

  return {
    authenticate: function() {
      return client.execute('/login/version/3', {
        email: client.options.email,
        password: client.options.password
      }).then(function(results) {

        // Set the apiKey directly on the client for all
        // future calls
        client.apiKey = results.api_key;
        client.version = results.version || 3;

        return Q.fcall(function() { return results; });
      });
    }
  };
};
