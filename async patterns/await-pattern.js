const { reject } = require('lodash')
const { resolve } = require('path')

const { readFile, writeFile} = require('fs').promises

// 3 arg readFile function: path, 

// without using .promises

// const run = path => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if(err){
//         reject(err)
//       }
//       else{
//         resolve(data)
//       }
//     })
//   })
// }

// run('./content/first.txt')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


// const pathRunner = path => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if(err){
//         reject(err)
//       }
//       else{
//         resolve(data)
//       }
//     })
//   })
// }

// async function run(){
//   try{
//     const first = await pathRunner('./content/first.txt')
//     console.log(first)
//   }
//   catch(err){
//     console.error(err)
//   }
// } 

// run()


const start  = async _ => {
  try{
    const first = await readFile('./content/first.txt', 'utf-8')
    console.log(first)
    const newFile = await writeFile('./content/result-async.txt', `Result: ${first}`)
    console.log(newFile)
  } 
  catch(err){
    console.error(err)
  }
}

start()