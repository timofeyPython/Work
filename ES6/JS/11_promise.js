// создание прописа и использование resolve,reject 
const testing = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Good')
    },5000)
})

const delay = ms => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`Ты ювелир!!!${ms}`),ms)
})
// использование методов then catch finally
// delay(2000)
//     .then(data=>delay(2000)
//     .then(data=>console.log('Круто ты и сюда пришёл',data)))
//     .catch(err=>console.log(`Вот и ошибочка мой друг, ${err}`))
//     .finally(()=>console.log('Финишная прямая!!!!!!'))

// async await тестим
// async function asyncDelay(){
//     // принимаем в await готовый промисс
//     // запись анологична .then(data=>delay(2000)
//     // const data = await delay(2000)
//     // console.log(data)
//     // блок если reject (с ошибкой)
//     try{
//         const data = await delay(2000)
//     }catch(e){
//         console.log('Ошибочка вышла ',e)
//     }
// }
// asyncDelay()

// работа с группой промисов ,выполеняется после всех 
// Promise.all([
//     delay(1000),
//     delay(3000),
//     delay(4000),
// ]).then(data=>console.log(data,'Все выполнено'))

// ждет когда выполнитсья самый быстрый промис
    
Promise.race([
delay(1000),
delay(3000),
delay(4000),
]).then(data=>console.log(data,'Все выполнено'))