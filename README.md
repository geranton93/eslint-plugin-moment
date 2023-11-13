# eslint-plugin-moment

ESLint plugin with rules for moment.js to ensure consistent and error-free code when working with dates and times.

- Prevents usage of moment's default constructor function and other literals for moment variable declarations except `moment`.
- Enhances code quality by enforcing best practices when working with moment.js.


## Installation

Before using `eslint-plugin-moment`, make sure you have ESLint installed:

```bash
$ npm install eslint --save-dev
```

Now, install `eslint-plugin-moment`:

```bash
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

## Contributing

We welcome contributions! If you find a bug or have a suggestion, please [open an issue](https://github.com/geranton93/eslint-plugin-moment/issues) or [create a pull request](https://github.com/geranton93/eslint-plugin-moment/pulls).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
