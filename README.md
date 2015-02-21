# Pardot API Client

[![Circle CI](https://circleci.com/gh/micahlmartin/pardot/tree/master.svg?style=svg)](https://circleci.com/gh/micahlmartin/pardot/tree/master)

This is a node client wrapper for v3 of the Pardot API.

## Table of Contents

- [Installation](#installation)
- [Use](#use)
- [Entities](#entities)
  - [Campaigns](#campaigns)
  - [Custom Fields](#custom-fields)
  - [Custom Redirects](#custom-redirects)
  - [Dynamic Content](#dynamic-content)
  - [Email Templates](#email-templates)
  - [Email](#email)
  - [Forms](#forms)
  - [Lifecycle Histories](#lifecycle-histories)
  - [Lifecycle Stages](#lifecycle-stages)
  - [Lists](#lists)
  - [List Memberships](#list-memberships)
  - [Opportunities](#opportunities)
  - [Prospect Accounts](#prosepct-accounts)
  - [Prospects](#Prospects)
  - [Tags](#tags)
  - [Tag Objects](#tag-objects)
  - [Users](#users)
  - [Visitors](#visitors)
  - [Visitor Activities](#visitor-activities)
  - [Visits](#visits)


## Installation

`npm install pardot`


## Use

In order to authenticate to the Pardot API you need to supply `email` `password` and `userKey`. The `userKey` can be found in [your settings](https://pi.pardot.com/account) under `API User Key`.

```javascript
var pardot = require('pardot');
pardot({
    email: 'joe@schmoe.com',
    password: 'easy',
    userKey: 'abc123'
}).then(function(client) {

    // We've successfully authenticated.
    // Perform some action
    client.prospects.upsertByEmail('test@email.com', {
        first_name: 'Joe',
        last_name: 'Schmoe'
    });

}).fail(function(err) {
    // Failed to authenticate
})
```

All methods return a [Q promise](http://documentup.com/kriskowal/q/).


## Entities
    
### Campaigns

http://developer.pardot.com/kb/api-version-3/campaigns/

Accessed via `client.campaigns`.

```javascript
query: function(params);
read: function(id, params);
update: function(id, params)
create: function(params)
```


###  Custom Fields

http://developer.pardot.com/kb/api-version-3/custom-fields/

Accessed via `client.customFields`.

```javsacript
query: function(params);
read: function(id);
update: function(id, params);
create: function(params);
delete: function(id);
```


### Custom Redirects

http://developer.pardot.com/kb/api-version-3/custom-redirects/

Accessed via `client.customRedirects`.

```javascript
query: function(params);
read: function(id);
```


### Dynamic Content

http://developer.pardot.com/kb/api-version-3/dynamic-content/

Accessed via `client.dynamicContent`.

```javascript
query: function(params);
read: function(id);
```


### Email

http://developer.pardot.com/kb/api-version-3/emails/

Accessed via `client.email`.

```javascript
read: function(id);
send: function(params);
```


### Email Templates

http://developer.pardot.com/kb/api-version-3/email-templates/

Accessed via `client.emailTemplates`.

```javascript
read: function(id);
listOneToOne: function();
```


### Forms

http://developer.pardot.com/kb/api-version-3/forms/

Accessed via `client.forms`.

```javascript
query: function(params);
read: function(id);
```


### Lifecycle Histories

http://developer.pardot.com/kb/api-version-3/lifecycle-histories/

Accessed via `client.lifecycleHistories`.

```javascript
query: function(params);
read: function(id);
```


### Lifecycle Stages

http://developer.pardot.com/kb/api-version-3/lifecycle-stages/

Accessed via `client.lifecycleStages`.

```javascript
query: function(params);
read: function(id);
```


### Lists

http://developer.pardot.com/kb/api-version-3/lists/

Accessed via `client.lists`.

```javascript
query: function(params);
read: function(id);
update: function(id, params);
create: function(params);
delete: function(id);
```


### List Memberships

http://developer.pardot.com/kb/api-version-3/list-memberships/

Accessed via `client.listMemberships`.

```javascript
query: function(params)
readById: function(id)
readByListIdAndProspectId: function(listId, prospectId)
create: function(listId, prospectId)
updateById: function(id, params)
updateByListIdAndProspectId: function(listId, prospectId, params)
deleteById: function(id)
deleteByListIdAndProspectId: function(listId, prospectId)
```

### Opportunities

http://developer.pardot.com/kb/api-version-3/opportunities/

Accessed via `client.opportunities`.

```javascript
query: function(params);
createByProspectEmail: function(prospectEmail, params);
createByProspectId: function(prospectId, params);
read: function(id);
delete: function(id);
undelete: function(id);
```


### Prospects

http://developer.pardot.com/kb/api-version-3/prospects/

Accessed via `client.prospects`.

```
assignByEmail: function(email, params);
assignById: function(id, params);
unassignByEmail: function(email);
unassignById: function(id);
query: function(params);
create: function(email, params);
readById: function(id);
readByEmail: function(email);
updateById: function(id, params);
updateByEmail: function(email, params);
upsertByEmail: function(email, params);
upsertById: function(id, params);
deleteById: function(id);
deleteByEmail: function(email);
```


### Prospect Accounts

http://developer.pardot.com/kb/api-version-3/prospect-accounts/

Accessed via `client.opportunities`.

```javascript
query: function(params);
create: function(params);
describe: function();
read: function(id);
update: function(id, params);
```


### Tags

http://developer.pardot.com/kb/api-version-3/tags/

Accessed via `client.tags`.

```javascript
query: function(params);
read: function(id);
```


### Tag Objects

http://developer.pardot.com/kb/api-version-3/tag-objects/

Accessed via `client.tagObjects`.

```javascript
query: function(params);
read: function(id);
removed: function(id);
```


### Users

http://developer.pardot.com/kb/api-version-3/users/

Accessed via `client.users`.

```javascript
query: function(params);
readByEmail: function(email);
readById: function(id);
```


### Visitors

http://developer.pardot.com/kb/api-version-3/visitors/

Accessed via `client.visitors`.

```javascript
query: function(params);
assign: function(id, params);
read: function(id);
```


### Visitor Activities

http://developer.pardot.com/kb/api-version-3/visitor-activities/

Accessed via `client.visitorActivities`.

```javascript
query: function(params);
read: function(id);
```


### Visits

http://developer.pardot.com/kb/api-version-3/visits/

Accessed via `client.visits`.

```javascript
query: function(params);
read: function(id);
```
