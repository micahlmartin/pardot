module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/visitorActivity/version/3/do/query', params);
    },

    read: function(id) {
      return client.execute('/visitorActivity/version/3/do/read/id/' + id);
    }

  };
};
