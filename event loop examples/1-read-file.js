const { readFile } = require('fs')

console.log('starting first task')

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if(err){
    console.log(err)
    return
  }
  console.log(result)
  console.log('first task finish')
})

console.log('starting second task')
