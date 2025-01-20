const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    console.log('hello world')
  }
})

server.listen(3000)

