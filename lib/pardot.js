var Q         = require('q');
var Hoek      = require('hoek');
var auth      = require('./auth');
var Client    = require('./client');


var internals = {};

internals.api = function(client) {
  return {
    campaigns: require('./campaign')(client),
    customFields: require('./custom-field')(client),
    customRedirects: require('./custom-redirect')(client),
    dynamicContent: require('./dynamic-content')(client),
    email: require('./email')(client),
    emailTemplates: require('./email-template')(client),
    forms: require('./form')(client),
    lifecycleHistories: require('./lifecycle-history')(client),
    lifecycleStages: require('./lifecycle-stage')(client),
    lists: require('./list')(client),
    listMemberships: require('./list-membership')(client),
    opportunities: require('./opportunity')(client),
    prospectAccounts: require('./prospect-account')(client),
    prospects: require('./prospect')(client),
    tags: require('./tag')(client),
    tagObjects: require('./tag-object')(client),
    users: require('./user')(client),
    visitors: require('./visitor')(client),
    visitorActivities: require('./visitor-activity')(client),
    visits: require('./visit')(client)
  };
};

module.exports = function(options) {

  options = options || {};

  return Q.promise(function(resolve, reject) {

    Hoek.assert(options.userKey, 'userKey must be specified');
    Hoek.assert(options.email, 'email must be specified');
    Hoek.assert(options.password, 'password must be specified');

    var client = new Client(options);

    auth(client).authenticate().then(function() {
      resolve(internals.api(client));
    }).fail(function(err) {
      reject(err);
    });

  });
};
