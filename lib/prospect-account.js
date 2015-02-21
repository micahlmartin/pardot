module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/prospectAccount/version/3/do/query', params);
    },

    create: function(params) {
      return client.execute('/prospectAccount/version/3/do/create', params);
    },

    describe: function() {
      return client.execute('/prospectAccount/version/3/do/describe');
    },

    read: function(id) {
      return client.execute('/prospectAccount/version/3/do/read/id/' + id);
    },

    update: function(id, params) {
      return client.execute('/prospectAccount/version/3/do/update/id/' + id, params);
    }

  };
};
