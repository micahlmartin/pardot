module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/visitor/version/' + client.version + '/do/query', params);
    },

    assign: function(id, params) {
      return client.execute('/visitor/version/' + client.version + '/do/assign/id/' + id, params);
    },

    read: function(id) {
      return client.execute('/visitor/version/' + client.version + '/do/read/id/' + id);
    }

  };
};
