module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/list/version/' + client.version + '/do/query', params);
    },

    read: function(id) {
      return client.execute('/list/version/' + client.version + '/do/read/id/' + id);
    },

    update: function(id, params) {
      return client.execute('/list/version/' + client.version + '/do/update/id/' + id, params);
    },

    create: function(params) {
      return client.execute('/list/version/' + client.version + '/do/create', params);
    },

    delete: function(id) {
      return client.execute('/list/version/' + client.version + '/do/delete/id/' + id);
    },

  };
};
