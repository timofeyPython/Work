const citiesRussia = ['Мосвка','Санкт-Петербург','Казань','Новосиб','Владимир']
const citiesEuropa = ['Берлин','Прага','Париж']

const citiesRussiaWithPopular = {
    Moscow: 20,
    Piter: 19,
    kazan: 18,
    novosib:17
}
const citiesEuropaWithPopular = {
    Moscow:26,
    berlin: 1,
    praga: 2,
    paris:3
}
 
//Spread разворачивает массив и все его элементы ,у объектов синстакс другой
// console.log(...citiesRussia)
// console.log(...citiesEuropa)

// const allCities = [...citiesEuropa,...citiesEuropa]
 
// старый concat() делает тоже самое ,но не актуален !!!
// const allCities = citiesEuropa.concat(citiesRussia)
// console.log(allCities)

// синтакси для spread (...) для объектов 
// console.log({...citiesEuropaWithPopular})
// если при объединение объекты похожы на друг друга, послед вывод
// console.log({...citiesRussiaWithPopular,...citiesEuropaWithPopular})

// Pract
const number = [1,2,3,4,1111]
// console.log(Math.max(1,2,3,111))
// console.log(Math.max(...number))

// console.log(Math.max.apply(null,number))

// const divs = document.querySelectorAll('div')
// const nods = [...divs]
// console.log(nods,Array.isArray(divs))
// console.log(nods,Array.isArray(nods))
// console.log(divs.map())




// REST 

sum = (a,b,...rest) =>{
    
    return a + b + rest.reduce((a,i)=> a + i ,0)
}
const numbers = [1,2,3,4,111,22]

// console.log(sum(...numbers))

// const [a,b,...ohter] = numbers

// console.log(a,b,...ohter)

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

const {name,age,...full} = person
console.log(name,age,JSON. stringify(full))