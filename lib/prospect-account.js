module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/prospectAccount/version/' + client.version + '/do/query', params);
    },

    create: function(params) {
      return client.execute('/prospectAccount/version/' + client.version + '/do/create', params);
    },

    describe: function() {
      return client.execute('/prospectAccount/version/' + client.version + '/do/describe');
    },

    read: function(id) {
      return client.execute('/prospectAccount/version/' + client.version + '/do/read/id/' + id);
    },

    update: function(id, params) {
      return client.execute('/prospectAccount/version/' + client.version + '/do/update/id/' + id, params);
    }

  };
};
