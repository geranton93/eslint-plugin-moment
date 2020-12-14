# eslint-plugin-moment

Plugin with moment rules for eslint. 
- Prevents usage of moment's default constructor function and other literal for moment valiable declaration except `moment`.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-moment`:

```
$ npm install eslint-plugin-moment --save-dev
```


## Usage

Add `moment` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "moment"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "moment/moment-parse-options": 2
    }
}
```

## Supported Rules

* moment-parse-options

## `moment-parse-options` Rule Details

Prevents use default moment constructor function and variable declaration with any other literal except `moment`

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
