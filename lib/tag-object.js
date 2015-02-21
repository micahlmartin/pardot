module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/tagObject/version/3/do/query', params);
    },

    read: function(id) {
      return client.execute('/tagObject/version/3/do/read/id/' + id);
    },

    removed: function(id) {
      return client.execute('/tagObject/version/3/do/delete/id/' + id);
    }

  };
};
