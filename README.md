[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-clnarr.svg?style=flat)](https://www.npmjs.com/package/dropsuit-clnarr) [![npm](https://img.shields.io/npm/dt/dropsuit-clnarr.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-clnarr) [![License](https://img.shields.io/npm/l/dropsuit-clnstr.svg)](https://www.npmjs.com/package/dropsuit-clnstr)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the clnarr Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The clnarr function is one of its modules, designed for cleaning and formatting arrays by removing duplicates, empty elements, and extra punctuation marks. It is available under the Apache License 2.0.

## DropSuit NLP Method: clnarr - A JavaScript and Node.js function for cleaning and formatting arrays.

The clnarr function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that removes duplicates, empty elements, and extra punctuation marks from an array. It's open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-clnarr
```

### Usage

Import the library in your project:

```
const dropsuit_clnarr = require("dropsuit-clnarr");

```

Set boolean parameter (true/false) argument value to display console log processing results output information in terminal:

```
let dsclnarr = new dropsuit_clnarr(false);
```

#### clnarr(array, integer)

- **array**: Raw array input.

#### integer: return option parameter arguments:

- **(0)** Keep duplicate.
- **(1)** Remove duplicate.
- **(2)** Remove duplicate and extra marks.

Duplicate, empty element and extra punctuation marks free trimmed lower case strings array:

```
let out = dsclnarr.clnarr(inputArray, 2);
console.log(out);
```

Return object instance:

```
Input:

 [
  <1 empty item>,
  '       ,,hello ,world, ',
  'world     .,-  ',
  'hello      ,   world  .,..',
  'world',
  '',
  undefined,
  '        ',
  null,
  <4 empty items>,
  true,
  '⬤',
  "~!@#$%^off   worlDs><'}{][|🌢*\\//()_  +*___/" ,
  NaN,
  '\n\n\n\n',
  ' heLLO',
  '',
  '  ',
  ' ',
  '    .       ,',
  '   ',
  'abc',
  'hello_world   ',
  <1 empty item>,
  '',
  'Hello .,   ',
  false,
  '?',
  '',
  'hello',
  'hello',
  'hello  !',
  'hello  !',
  'hello!',
  '... /',
  1234,
  -1,
  <3 empty items>,
  '  hello$world ?,.'
]

Return type ( 2 ) --> Remove duplicate and extra marks:

 [ 'abc', 'hello', 'hello world', 'off worlds', 'world' ]

```

## Links

- npm: https://www.npmjs.com/package/dropsuit-clnarr

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)