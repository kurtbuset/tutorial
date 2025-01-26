const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    console.log('hello world')
    res.end('hello kort')
  }
})

server.listen(3000, () => {
  console.log('server listening at port 3000...')
})

