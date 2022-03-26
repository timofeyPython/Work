function* strGenerator() {
    yield 'H'
    yield 'E'
    yield 'L'
    yield 'L'
    yield 'o'
}

// const str = strGenerator()

// function* numberGen(n = 10 ){
//     for (let i = 0; i<n ; i++){
//         yield i
//     }
// }

// const num = numberGen(7)

// const iterator = {
//     // [Symbol.iterator] специальный символ который позволил проэтировровать
//     [Symbol.iterator]( n = 10){
//         let i = 0

//         return{
//            next(){
//                if(i < n) {
//                 return {value: ++i, done:false}
//                }
//                return {value: undefined,done:true}
//            }
//         }
//     }
// }

// Облегченный вариант без  большого кода 
// function* iter(n = 10){
//     for (let i = 0; i < n ; i++){
//         yield i 
//     }
// }

// for (let k of iter() ){
//     console.log(k)
// }