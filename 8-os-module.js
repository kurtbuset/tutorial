const os = require('os')
const user = os.userInfo()
const uptime = os.uptime()
console.log(uptime)
console.log(user)


const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

const { name, release, totalMem, freeMem } = currentOS
console.log(currentOS)