const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('welcome to our homepage')
    return
  }

  if(req.url === '/about'){
    // BLOCKING CODE!!  because of for loop; huwatun pa mahuman ang for loop bag o pa ka execute and result sa req
    for(let i = 0; i < 100; i++){
      for(let j = 0; j < 100; j++){
        console.log(`${i} ${j}`)
      }
    }
    res.end('this is the about page')
    return
    
  }
  res.end('error 404 bitch')
})

server.listen(5000, () => {
  console.log('server listening at port 5000...')
})



