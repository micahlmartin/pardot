module.exports = function(client) {

  return {

    query: function(params) {
      return client.execute('/listMembership/version/' + client.version + '/do/query', params);
    },

    readById: function(id) {
      return client.execute('/listMembership/version/' + client.version + '/do/read/id/' + id);
    },

    readByListIdAndProspectId: function(listId, prospectId) {
      return client.execute('/listMembership/version/' + client.version + '/do/read/list_id/' + listId + '/prospect_id/' + prospectId);
    },

    create: function(listId, prospectId) {
      return client.execute('/listMembership/version/' + client.version + '/do/create/list_id/' + listId + '/prospect_id/' + prospectId);
    },

    updateById: function(id, params) {
      return client.execute('/listMembership/version/' + client.version + '/do/update/id/' + id, params);
    },

    updateByListIdAndProspectId: function(listId, prospectId, params) {
      return client.execute('/listMembership/version/' + client.version + '/do/update/list_id/' + listId + '/prospect_id/' + prospectId, params);
    },

    deleteById: function(id) {
      return client.execute('/listMembership/version/' + client.version + '/do/delete/id/' + id);
    },

    deleteByListIdAndProspectId: function(listId, prospectId) {
      return client.execute('/listMembership/version/' + client.version + '/do/delete/list_id/' + listId + '/prospect_id/' + prospectId);
    },

  };
};
