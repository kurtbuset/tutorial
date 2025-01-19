const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.write('welcome to our homepage')
    res.end()
  }

  if(req.url === '/about'){
    res.write('this is the about page')
    res.end()
    
  }
  res.end(`
    <h1>opss</h1>
    <p>we cant find the page you're looking for</p>
    <button>exit</button>
  `)
})

server.listen(3000)
console.log('server listening at port 3000')


