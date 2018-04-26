module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/opportunity/version/' + client.version + '/do/query', params);
    },

    createByProspectEmail: function(prospectEmail, params) {
      return client.execute('/opportunity/version/' + client.version + '/do/create/prospect_email/' + prospectEmail, params);
    },

    createByProspectId: function(prospectId, params) {
      return client.execute('/opportunity/version/' + client.version + '/do/create/prospect_id/' + prospectId, params);
    },

    read: function(id) {
      return client.execute('/opportunity/version/' + client.version + '/do/read/id/' + id);
    },

    delete: function(id) {
      return client.execute('/opportunity/version/' + client.version + '/do/delete/id/' + id);
    },

    undelete: function(id) {
      return client.execute('/opportunity/version/' + client.version + '/do/undelete/id/' + id);
    },
  };
};
