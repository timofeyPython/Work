//file system
const fs = require('fs')
const path = require('path')
//создание папок

// fs.mkdir(path.join(__dirname,'test'),(err)=>{
//     if(err){
//         throw err
//     }
//     console.log('Папка создана')
// })

const file_path = path.join(__dirname,'test','text.txt')
// //перетирает файл
// fs.writeFile(file_path, 'Hello word!!',err=>{
//     if (err){
//         throw err
//     }
//     console.log('Файл создан')
// })
// //добовляет
// fs.appendFile(file_path, 'Hello sword!!',err=>{
//     if (err){
//         throw err
//     }
//     console.log('Файл создан')
// })

//читает файлы
fs.readFile(file_path,'utf-8',(err,content)=>{
    if (err){
        throw err
    }
    // const data = Buffer.from(content)
    // console.log('Content:',data.toString())
        //Способ удобнее
    console.log(content)
}) 