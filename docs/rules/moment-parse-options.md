
## Rule Details

Prevents use default moment constructor function and variable definition with any other literal except `moment`

Examples of **incorrect** code for this rule:

```js

const literal = require("moment");

```

```js

import literal from 'moment';
import * as literal from 'moment';

```

```js

moment();
moment("19/09/2020");

```

Examples of **correct** code for this rule:

```js

const moment = require("moment");

```

```js

import moment from 'moment';
import * as moment from 'moment';

```

```js

// UTC
moment.utc();
moment.utc("19/09/2020");

// TimeZone
moment.tz();
moment.tz("19/09/2020", "Europe/Kiev");

```
