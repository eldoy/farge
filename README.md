# Farge

Terminal colors and styles the easy way.

Extremely minimal implementation, no dependencies.

### Install

```sh
npm i farge
```

### Usage

```js
const farge = require('farge')({

  // Set to true to add newline automatically
  newline: false
})

// Bold text
farge.bold.log('hello')

// Green text
farge.green.log('hello')

// Red text
farge.red.log('hello')

// Dim text
farge.green.log('hello')

// Bold and green, combine as many as you want
farge.bold.green.log('hello')
```

See [lib/colors.js](https://github.com/eldoy/farge/blob/master/lib/colors.js) for all the possible colors and styles.

ISC Licensed. Enjoy!
