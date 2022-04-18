const path = require('path')
const {parse} = require("nodemon/lib/cli");

console.log('Название файла',path.basename(__filename))
console.log('Имя директории',path.dirname(__filename))
console.log('Расширении файла:',path.extname(__filename))
console.log('Parse:',path.parse(__filename))

console.log(path.join(__dirname,'server','index.html'))