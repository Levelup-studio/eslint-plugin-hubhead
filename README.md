# eslint-plugin-hubhead

custom rules for hubhead.app devs

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-hubhead`:

```sh
npm install eslint-plugin-hubhead --save-dev
```

## Usage

Add `hubhead` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "hubhead"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "hubhead/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


