module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/customRedirect/version/' + client.version + '/do/query', params);
    },

    read: function(id) {
      return client.execute('/customRedirect/' + client.version + '/do/read/id/' + id);
    }

  };
};
