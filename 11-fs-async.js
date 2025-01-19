


const { readFile, writeFile } = require('fs')

console.log('starting task...')
readFile('content/first.txt', 'utf-8', (err, result) => {
  if(err){
    console.log(err)
    return
  }
  
  const first = result

  readFile('content/second.txt', 'utf-8', (err, result) => {
    if(err){
      console.log(err)
      return
    }
    
    const second = result

    writeFile('./content/result-async.txt', `Result: ${first + ' ' + second} :D`, (err, result) => {
      if(err){
        console.log(err)
        return
      }
      console.log('finishing task')
    })
  })
})
  
console.log('starting next task')