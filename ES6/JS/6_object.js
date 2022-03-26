// const cityFiel = 'city'
// const job = 'Frontend'

// const person = {
//     name:'Max',
//     age:26,
//     job,
//     [cityFiel + Date.now()]:'Saint-Piterburg',
//     country: 'Moscow',
//     'country-live':'Russia',
//     print:()=> 'Person',
//     toString:function(){
//         return Object
//         .keys(this)
//         .filter(key => key !== 'toString')
//         .map(key=>this[key])
//         .join(' ')
//     }
// }

// console.log(person.toString())
// console.log(person.print())
// console.log(person)

const first = {a:1}
const second = {b:2}

// console.log(Object.is(20,21))
// Объединение объектов
const obj =  (Object.assign({},first,{
    c:2,
    d:3
}))

// console.log(obj)

console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))
