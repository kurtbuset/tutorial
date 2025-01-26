const { error } = require('console')
const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = createReadStream('../content/big-file.txt', {        // fetching the data and store it in a variable
  highWaterMark: 10000,                                            // controlling the size of chunks to 10000 bytes
  // encoding: 'utf8'                                             // translate the buffer into readable letters
})     

stream.on('data', result => {
  console.log(result)       
})

stream.on('error', error => {
  console.error(error)
})