const { writeFileSync } = require('fs')

for(let i = 0; i < 10000; i++){
  console.log(i)
  writeFileSync('./content/big-file.txt', `hello kort ${i}`, { flag: 'a' })
}