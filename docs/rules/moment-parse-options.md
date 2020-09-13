
## Rule Details

Prevents use default moment constructor function and variable definition with any other literal except `moment`

Examples of **incorrect** code for this rule:

```js

const momentModule = require("moment");

```

```js

moment();

```

Examples of **correct** code for this rule:

```js

const moment = require("moment");

```

```js

moment.utc();

moment.tz();

```
