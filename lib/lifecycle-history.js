module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/lifecycleHistory/version/' + client.version + '/do/query', params);
    },

    read: function(id) {
      return client.execute('/lifecycleHistory/version/' + client.version + '/do/read/id/' + id);
    }

  };
};
