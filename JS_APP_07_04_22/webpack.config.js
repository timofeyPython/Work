const path = require('path')//Работаем с путями (папки)
const HtmlPlugin = require('html-webpack-plugin')//подлкючаем плагин

module.exports = {
    entry:'./src/app.js',
    output:{
        filename: 'bundle.[chunkhash].js',
        path:path.resolve(__dirname,'public')//складываем все JS скрипты в папку 
    },
    devServer:{
        port:3000
    },
    plugins:[
        new HtmlPlugin({
            template: './src/index.html'
        })
    ]

    
    
}