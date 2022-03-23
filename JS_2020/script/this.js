const document = {
    
}
hello = () =>{
    console.log('Hello',this)
} 
const person = {
    name:'Tima',
    age:25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job,phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    age:23,
    name:'Elena'
}
 
//  person.logInfo.bind(lena,1,2)()
//  person.logInfo.call(lena,1,2)
person.logInfo.apply(lena,['1','2'])

// ----------------

const array = [1,2,3,4,5]

// function multBy(array,n){
//     return array.map(function(i){
//         return i*n
//     })
// }

Array.prototype.multBy = function(n){
       return this.map(function(i){
        return i*n
    })
}
// console.log(multBy(array,5))
console.log(array.multBy(3))

