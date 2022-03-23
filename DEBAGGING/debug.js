// const people = [
//     {id:1, name :'tima',age:25},
//     {id:2, name :'Dima',age:25},
//     {id:3, name :'Sima',age:25},
//     {id:4, name :'Rima',age:25},
//     {id:5, name :'Kima',age:25},
//     {id:6, name :'Cima',age:25}
// ]

// console.table(people)
console.time('timer')
const items  = []

for (let i=0;i<10000000; i++){
    items.push({el:1+i})
}

console.timeEnd('timer')

 