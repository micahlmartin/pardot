module.exports = function(client) {

  return {

    read: function(id) {
      return client.execute('/email/version/3/do/read/id/' + id);
    },

    send: function(params) {
      return client.execute('/email/version/3/do/send', params);
    }

  };
};
