// localStorage локальная база данных
const myNumber = 42

// получает из локал стораж
// console.log(localStorage.getItem('number'))
// // запись в localSt
// localStorage.setItem('number',myNumber.toString())
// console.log(localStorage.getItem('number'))

// // localStorage.removeItem('number')
// localStorage.clear()

// **записывание объекта в localstorage
// const object = {
// name:'Max',
// age:20
// }
// JSON.stringify превращает в объект ты уже знаешь это
// localStorage.setItem('person',JSON.stringify(object))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Zafira'
person.age = 65

const persons = JSON.parse(raw)
// console.log(persons)

// ** Синхронизация с другимим вкладками бонус тайм

window.addEventListener('storage',event => {
console.log(event)
})