let people = [
    {name:'Tima',age:25,budget:40},
    {name:'Dima',age:26,budget:39},
    {name:'Tina',age:27,budget:38},
    {name:'Vima',age:17,budget:37},
    {name:'Lima',age:15,budget:36},
    {name:'Rima',age:30,budget:35},
]
// Итерация 1 версия
// for (let i = 0; i < people.length;  i++){
//     console.log(people[i])
// }
// итерация 2 версия
// for (let key of people){
//     console.log(key)
// }

// ПЕРЕБОР МАССИВА ЛАКОНИЧНО
// ForEach
// people.forEach(function(person,index,pArr){
//     console.log(person)
//     console.log(index)
//     console.log(pArr)
// })
// """"""""""""""""""""""
// канон
// people.forEach(person => console.log(person))

// ВОЗРАЩЕНИЕ НОВОГО МАССИВАА МАР
// Map
// const newPeople = people.map(person=>`имя баклана ${person.name} его зп (${person.budget}$) `
// )
// console.log(newPeople)

// ФИЛЬТРАЦИЯ
// Filter 
// const adults = []
// for (let i = 0; i < people.length; i++){
//     if(people[i].age >= 18){
//         adults.push(people[i])
//     }
// }
// console.log(adults)
// SUPER *********************
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)

// Reduce
// let amount = 0 
// for (let i = 0; i < people.length;  i++){
//     amount += people[i].budget
// }

// Сложение в массиве КРУТО
// const amount = people.reduce((total,person) =>total + person.budget,0)
// console.log(amount)

// find
// const tima = people.find(person =>person.name  ==='Tima')
// console.log(tima)

// // FindIndex
// const timas = people.findIndex(person =>person.name  ==='Tima')
// console.log(timas)

// Создание нового массива с сортировкой filter
const a = people
    .filter(person => person.budget > 30)
    .map(person =>{
        return {
            info: `${person.name}(${person.age})`,
            budget:Math.sqrt(person.budget)
        }
    })
    .reduce((total,person) => total + person.budget, 0)

console.log(a)