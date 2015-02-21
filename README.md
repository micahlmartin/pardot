# Pardot API Client

[![Circle CI](https://circleci.com/gh/micahlmartin/pardot/tree/master.svg?style=svg)](https://circleci.com/gh/micahlmartin/pardot/tree/master)

This is a node client wrapper for v3 of the Pardot API. 


## Installation

`npm install pardot`


## Use

In order to authenticate to the Pardot API you need to supply `email` `password` and `userKey`. The `userKey` can be found in [your settings](https://pi.pardot.com/account) under `API User Key`.

```
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





