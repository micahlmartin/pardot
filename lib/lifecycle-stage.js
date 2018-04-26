module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/lifecycleStage/version/' + client.version + '/do/query', params);
    },

    read: function(id) {
      return client.execute('/lifecycleStage/version/' + client.version + '/do/read/id/' + id);
    }

  };
};
