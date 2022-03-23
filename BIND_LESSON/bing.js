const person = {
   name: 'Tima',
   last_name:'Tepay',
 
}

function info (phone,mail){
    console.log(`Его имя ${this.name} ${this.last_name},тел: ${phone},и мыло ${mail}`)
}


// вызов фукнции в связке в bind,которая привязывется объект 
// info.bind(person)('442235','xui.ru')
// info.bind(person,'442235','xui.ru')()

// 1 easy не канон
// function bind(fn, context,...rest){
//     return fn.bind(context,...rest)
// }

// 2 способ бещ встроенных методов  

// function bind(fn,context,...rest){
//     // вызываю фун-ую чтобы не дрочиться 
//     // return fn.bind(context,...rest)

//     return function(...args){
//         const uniqId = Date.now().toString()
//         context[uniqId] = fn
     
//         const result = context[uniqId](...rest.concat(args))
//         // удаляем уникальные ключи
//         delete context[uniqId]
//         return result
//     }
// }
 
 
//3 способ  ES5 OLD

// function bind(fn,context){
//     const rest = Array.prototype.slice.call(arguments,2)
//     return function(){
//         const args = Array.prototype.slice.call(arguments)
//         return fn.apply(context,rest.concat(args))
//     }
// }
// 4 способ SUPER
// function bind(fn,context,...rest){
//     return function(...args){
//         // return fn.apply(context,rest.concat(args))
//         fn.call(context,...rest.concat(args))
//     }
// } 


// bind(info,person)('442235','xui.ru')
// bind(info,person,'442235','xui.ru')()
 
// Call
function call (fn,context,...args){
        const uniqId = Date.now().toString()

        context[uniqId] = fn
     
        const result = context[uniqId](...args)
         
        delete context[uniqId]

        return result
        
}

call(info,person,'1','2')
 
// Apply
function apply (fn,context,args){
    const uniqId = Date.now().toString()

    context[uniqId] = fn
 
    const result = context[uniqId](...args)
     
    delete context[uniqId]

    return result
    
}
apply(info,person,['3','4'])

 