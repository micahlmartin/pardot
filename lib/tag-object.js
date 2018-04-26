module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/tagObject/version/' + client.version + '/do/query', params);
    },

    read: function(id) {
      return client.execute('/tagObject/version/' + client.version + '/do/read/id/' + id);
    },

    removed: function(id) {
      return client.execute('/tagObject/version/' + client.version + '/do/delete/id/' + id);
    }

  };
};
