//  function createCalculat(n){
//      return function(){
//          console.log(n * 1000)
//      }
//  }

//  const a = createCalculat(42)
//  a()

// function createIncrementor(n){
//     return function(num){
//         return n + num
//     }
// }

// const addOne = createIncrementor(2)
// const addTen = createIncrementor(10)

// console.log(addOne(1))
// console.log(addOne(11))

// console.log(addTen(2))
// console.log(addTen(12))

// function urlGeneration(domain){
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }

// const a = urlGeneration('ru')
// const b = urlGeneration('en')
// console.log(a('doiki'))
// console.log(b('zahar'))

function bind (a,b) {
    return function(){
        b.call(a)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Tima',age:22,job:'Gruzchik'} 
const person2 = {name: 'Dima',age:25,job:'it'}

 
// logPerson.call(person1)
// logPerson.call(person2)
bind(person1,logPerson)()
bind(person2,logPerson)()

