module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/customField/version/3/do/query', params);
    },

    read: function(id) {
      return client.execute('/customField/version/3/do/read/id/' + id);
    },

    update: function(id, params) {
      return client.execute('/customField/version/3/do/update/id/' + id, params);
    },

    create: function(params) {
      return client.execute('/customField/version/3/do/create', params);
    },

    delete: function(id) {
      return client.execute('/customField/version/3/do/delete/id/' + id);
    },

  };
};
