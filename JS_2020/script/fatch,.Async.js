const delay = ms =>{
    return new Promise(resolve=>setTimeout(()=>resolve(),ms))
}


const url = 'https://jsonplaceholder.typicode.com/todos/1'
// 1 метод
//  fetchTodos =()=>{
//     console.log('Fetch todo started')
//     return delay(2000)
//     .then(()=>{
//         return fetch(url)
//     }).then(response=> response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data',data)
//     })
//     .catch(e=> console.error(e))
 
// 2 метод

async function fetchAsyncTodos () {
    console.log('Fetch todo started')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:',data) 
    } catch(e){
        console.log(e)
    }finally {
        console.log('Liberty')
    }
 
}

fetchAsyncTodos()

 