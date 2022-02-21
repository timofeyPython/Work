const array = [1,2,3,4,5]
const str = 'Hello'

// console.log(array[Symbol.iterator])
// console.log(str[Symbol.iterator])

// const iter =  str[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// новый итератор for of 
// for(let key of str){
//     console.log(key)
// }

// пример взаимодествие for of и next()
// const country = {
//     values:['ru', 'en','ua','kz'],
//     [Symbol.iterator](){
//         let i = 0
//         return{
//             next:()=>{
//                 const value = this.values[i]
//                 i++
//                 return {
//                     done: i> this.values.length,
//                     value
//                 }
//             }
//         }
//     }
// }
// for (let key of country){
//     console.log(key)
// }

// Generator спец символ * пример применение next с try catch
function * gen ( num = 4 ){
    for(let i = 0; i < num; i++){
        try{   
            yield i 
        }catch(e){
            console.log(e ,'lox')
        }
    }
}

const iter = gen(3)
console.log(iter.next())
console.log(iter.throw('My error'))
console.log(iter.next())
console.log(iter.next())

for (let i of gen(4)){
    console.log(i)
}