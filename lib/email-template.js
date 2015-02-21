module.exports = function(client) {

  return {

    read: function(id) {
      return client.execute('/emailTemplate/version/3/do/read/id/' + id);
    },

    listOneToOne: function() {
      return client.execute('/emailTemplate/version/3/do/listOneToOne');
    }

  };
};
