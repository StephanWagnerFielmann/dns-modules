const path = require('path');

module.exports = {
  extends: [
    "tslint-react"
  ],
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-react')), './'),
  ],
  rules: {
    align: [
      true,
      "parameters",
      "arguments",
      "statements"
    ],
    ban: false,
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    curly: true,
    eofline: false,
    forin: true,
    indent: [
      true,
      "spaces",
      2
    ],
    "interface-name": [
      true,
      "never-prefix"
    ],
    "jsdoc-format": true,
    "jsx-no-lambda": false,
    "jsx-no-multiline-js": false,
    "jsx-boolean-value": false,
    "label-position": true,
    "max-line-length": [
      true,
      120
    ],
    "member-ordering": [
      true,
      "public-before-private",
      "static-before-instance",
      "variables-before-functions"
    ],
    "no-any": false,
    "no-arg": true,
    "no-bitwise": false,
    "no-console": [
      false,
      "log",
      "error",
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-consecutive-blank-lines": true,
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-empty": true,
    "no-eval": true,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": false,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "one-line": [
      true,
      "check-catch",
      "check-else",
      "check-open-brace",
      "check-whitespace"
    ],
    // "ordered-imports": true,
    // "object-literal-sort-keys": true,
    quotemark: [
      true,
      "single",
      "jsx-double"
    ],
    radix: true,
    semicolon: [
      true,
      "always"
    ],
    "switch-default": true,
    "trailing-comma": [
      false
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    typedef: [
      true,
      "parameter",
      "property-declaration"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
      "allow-pascal-case",
      "allow-snake-case"
    ],
    whitespace: [
      true,
      "check-branch",
      "check-decl",
      "check-module",
      "check-operator",
      "check-separator",
      "check-type",
      "check-typecast"
    ]
  }
};
