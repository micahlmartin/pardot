module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/visitor/version/3/do/query', params);
    },

    assign: function(id, params) {
      return client.execute('/visitor/version/3/do/assign/id/' + id, params);
    },

    read: function(id) {
      return client.execute('/visitor/version/3/do/read/id/' + id);
    }

  };
};
