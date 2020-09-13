# eslint-plugin-moment

plugin with moment rules

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





