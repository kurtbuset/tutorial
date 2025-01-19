const path = require('path')

const filename = path.join('content', 'subfolder', 'test.txt')
console.log(filename)

const basename = path.basename(filename, '.txt')
console.log(basename)

const fullpath = path.resolve(__dirname, '/content', 'subfolder', 'test.txt')
console.log(fullpath)