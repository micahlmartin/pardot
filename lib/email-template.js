module.exports = function(client) {

  return {

    read: function(id) {
      return client.execute('/emailTemplate/version/' + client.version + '/do/read/id/' + id);
    },

    listOneToOne: function() {
      return client.execute('/emailTemplate/version/' + client.version + '/do/listOneToOne');
    }

  };
};
