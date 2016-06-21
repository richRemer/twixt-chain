twixt-chain Function
====================

```js
var chain = require("twixt-chain"),
    fetchById = require("hypothetical-fetch-by-id-function");

var fetchParent = chain(child => child.parent_id, fetchById);
```

