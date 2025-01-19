// CommonJS, every file is module (by default)
// Modules - Encapstulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
// require('./7-mind-granade')


sayHi(names.jonas)
sayHi(names.kort)


