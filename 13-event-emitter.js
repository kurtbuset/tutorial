// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')
const { emit } = require('process')

const emitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
emitter.on('response', (arg1, arg2) => {
  console.log(`hello ${arg1 + ' ' + arg2}`)
})


emitter.on('response', _ => {
  console.log(`age: idk`)
})


emitter.emit('response', 'kwort', 21)

