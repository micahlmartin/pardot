module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/campaign/version/' + client.version + '/do/query', params);
    },

    read: function(id, params) {
      return client.execute('/campaign/version/' + client.version + '/do/read/id/' + id, params);
    },

    update: function(id, params) {
      return client.execute('/campaign/version/' + client.version + '/do/update/id/' + id, params);
    },

    create: function(params) {
      return client.execute('/prospect/version/' + client.version + '/do/create', params);
    }

  };
};
