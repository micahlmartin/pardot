module.exports = function(client) {

  return {

    read: function(id) {
      return client.execute('/email/version/' + client.version + '/do/read/id/' + id);
    },

    send: function(params) {
      return client.execute('/email/version/' + client.version + '/do/send', params);
    }

  };
};
