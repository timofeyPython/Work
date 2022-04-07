const path = require('path')//Работаем с путями (папки)

module.exports = {
    entry:'./src/app.js',
    output:{
        filename: 'bundle.js',
        path:path.resolve(__dirname,'public')//складываем все JS скрипты в папку 
    },
    devServer:{
        port:3000
    }
}