const http = require('http')

const server = http.createServer() 

server.on('request', (req, res) => {
  res.end('kort')
})

server.listen(3000)