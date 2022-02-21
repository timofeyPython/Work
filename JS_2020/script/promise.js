// console.log('Request data...')

// setTimeout(()=>{
//     console.log('Preparing data...')

//     const backendData = {
//         server:'aws',
//         port: '2000',
//         status: 'working'

//     }



//     setTimeout(()=>{
//         backendData.modified = true
//         console.log('Data recevied',backendData)
//     },2000)

// },2000)

// const p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//         server:'aws',
//         port: 2000,
//         status: 'working'
//         }
//         resolve(backendData)
//     },2000)
// })
// // then когда Promise выполнит установленное условие resolve ,reject отказ
// p.then(data=>{
//     return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             data.modified = true
//             resolve(data)
    
//     },4000)

// }) 
//     // p2.then(clientData =>{
//     //     console.log('Data recevied',clientData)
//     // })

// //   catch ловит ошибку 
// })   
//     .then(abc=>{
//     abc.fromPromise = true
//     return abc
// }).then(data=>{
//     console.log('modified',data)
// })

//  .catch(err=> console.log('Ошибка:',err))
//  .finally(()=>{
//     setTimeout(()=>{
//         console.log ('Кончил')
//     },4000)

//  })

const sleep = (ms) =>{
    return new Promise(resolve => {
     setTimeout(()=> resolve(),ms)
    })
}

sleep(2000).then(()=>console.log('after 2 sec'))
sleep(3000).then(()=>console.log('after 3 sec'))

Promise.all([sleep(2000),sleep(3000)])
    .then(()=>{
        console.log('All promise')
    })

    Promise.race([sleep(2000),sleep(3000)])
    .then(()=>{
        console.log('All promise')
    })