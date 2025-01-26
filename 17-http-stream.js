const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {        
  const dataStream = fs.createReadStream('./content/first.txt', 'utf-8')         // get the first.txt and read it
  dataStream.on('open', _ => {                                                   // open the dataStream file
    dataStream.pipe(res)                                                        // datas of dataStream will send to the res(which is the client) using pipe function
  })

  dataStream.on('error', err => {
    console.error(err)
  })
})

server.listen(3000)