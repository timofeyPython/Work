// const requestUrl = 'https://jsonplaceholder.typicode.com/users'
// вызываем конструктор ,чтобы работать с jSON
// const xhr = new XMLHttpRequest()
// открываем и передаем запрос GET 
// xhr.open('GET', requestUrl)
 
// // обрабатываем данные для вывода в консоль и т.д.
// // JSON.parse парсинг объектов или 2 метод
 
// xhr.responseType = 'json'
// // фукнция с возможностью ловли ошибок 
// xhr.onload = () => {
//     if(xhr.status >= 400){
//         console.error(xhr.response)
//     }else{  
//     console.log (xhr.response)
//     }
// }
// // обрабатываем ошибки 
// xhr.onerror = () => {
//     console.error(xhr.response)
// }
 
// // отправляем запрос
// xhr.send()
 
// sendRequest = (method,url,body = null) =>{
//     return new Promise ((resolve,reject)=>{
//         const xhr = new XMLHttpRequest()
 
//         xhr.open(method, url)
        
//         xhr.responseType = 'json'  
//         // Отправляем данные в формате JSON с запросом
//         xhr.setRequestHeader('Content-Type', 'application/json')
 
//         xhr.onload = () => {
        
//         if(xhr.status >= 400){
//             reject(xhr.response)
//         }else{  
//         resolve(xhr.response)
//             }
//         }
    
//         xhr.onerror = () => {
//             reject(xhr.response)
//         }
    
    
//         xhr.send(JSON.stringify(body))
//     })
// }
 
// // sendRequest('GET', requestUrl)
// // .then(data=>console.log(data))
// // .catch(err =>console.log(err))
 
// body = {
//     name:'Bot',
//     age:26
// }
 
// sendRequest('POST', requestUrl,body)
//     .then(data=>console.log(data))
//     .catch(err =>console.log(err))


 
// // fetch
 
// const requestUrl = 'https://jsonplaceholder.typicode.com/users'
// // вызываем конструктор ,чтобы работать с jSON
// // const xhr = new XMLHttpRequest()
// // открываем и передаем запрос GET 
// // xhr.open('GET', requestUrl)
 
// // // обрабатываем данные для вывода в консоль и т.д.
// // // JSON.parse парсинг объектов или 2 метод
 
// // xhr.responseType = 'json'
// // // фукнция с возможностью ловли ошибок 
// // xhr.onload = () => {
// //     if(xhr.status >= 400){
// //         console.error(xhr.response)
// //     }else{  
// //     console.log (xhr.response)
// //     }
// // }
// // // обрабатываем ошибки 
// // xhr.onerror = () => {
// //     console.error(xhr.response)
// // }
 
// // // отправляем запрос
// // xhr.send()
 
const requestUrl = 'https://jsonplaceholder.typicode.com/users'
 
sendRequest = (method,url,body = null) =>{
    const headers = {
        'Content-Type':'application/json'
    }
   return fetch(url,{
       method: method,
       body:JSON.stringify(body),
       headers: headers
   }).then( response =>{
       if (response.ok){
           
       
       return response.json()
    }
        return response.json().then(error=>{
            const e = new Error ('Что то пошло не так')
            e.data = error
            throw e
        })
   })
}

// Метод GET на получение данных парсинг

// sendRequest('GET', requestUrl)
// .then(data=>console.log(data))
// .catch(err =>console.log(err))
 
body = {
    name:'Bot',
    age:26
}

// метод POST на получение 

sendRequest('POST', requestUrl,body)
    .then(data=>console.log(data))
    .catch(err =>console.log(err))