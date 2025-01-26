const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('welcome to our homepage')
    return
  }

  if(req.url === '/about'){
    res.end('this is the about page')
    return
    
  }
  res.end('error 404 bitch')
})

server.listen(5000, () => {
  console.log('server listening at port 5000...')
})



