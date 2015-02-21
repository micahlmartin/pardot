module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/opportunity/version/3/do/query', params);
    },

    createByProspectEmail: function(prospectEmail, params) {
      return client.execute('/opportunity/version/3/do/create/prospect_email/' + prospectEmail, params);
    },

    createByProspectId: function(prospectId, params) {
      return client.execute('/opportunity/version/3/do/create/prospect_id/' + prospectId, params);
    },

    read: function(id) {
      return client.execute('/opportunity/version/3/do/read/id/' + id);
    },

    delete: function(id) {
      return client.execute('/opportunity/version/3/do/delete/id/' + id);
    },

    undelete: function(id) {
      return client.execute('/opportunity/version/3/do/undelete/id/' + id);
    },
  };
};
