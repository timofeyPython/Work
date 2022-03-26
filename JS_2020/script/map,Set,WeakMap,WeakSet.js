// const obj = {
// name:'Tima',
// age: 25,
// job: 'Prog'
// }

// const entries = [
// ['name','Timka'],
// ['age',26],
// ['job','Prog']
// ]

// let abc = Object.entries(obj)

// const mapa = new Map(abc)
// .set('female','wonen')
// .set('male','Man')
// console.log(mapa.size)
// транспортиррование из объекта в массив и обратно
// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

// Метод MAP
// const map = new Map(entries)
// console.log(map.get('job'))

// console.log(obj.job)

// map
// .set('newField',42)
// .set(obj,'Value of object')
// .set(NaN, 'NaN ??')


// console.log (map.get(NaN))
// console.log (map)

// console.log(map.delete('job'))
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// ===============
// перебор массива
// for ( let [key , value] of map.entries()){
// console.log(key,':',value)
// }
// по значению
// for (let val of map.values()){
// console.log(val)
// }
// по ключу
// for (let key of map.keys()){
// console.log(key)
// }
// перебор с forEach(1,2,3)
// map.forEach((a,b,c) =>{
// console.log(b ,'-',a)
// })

// создание массива из карты
// const array = [...map]


// =====================
// const array = Array.from(map)
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)


// ======================

// Монипуляции с Map

// const users = [
// {name:'Elena'},
// {name:'Vasy'},
// {name:'Varvara'},
// {name:'Oleg'}
// ]

// const visits = new Map()

// visits
// .set(users[0],new Date())
// .set(users[1],new Date(new Date().getTime() + 10000 *60))
// .set(users[2],new Date(new Date().getTime()+ 10000*60))

// function lastVisit(user){
// return visits.get(user)
// }
// console.log(lastVisit(users[1]))
// console.log(lastVisit(users[2]))
// ******************************************************
// SET
// const set = new Set([1,2,3,4,5,6,6,6,])

// set.add(10).add(20).add(30).add(30)
// console.log(set)

// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// console.log(set.clear())
// console.log(set.size)

// for (key of set){
// console.log(key)
// }

// ====================

// function uniqValues(array){
// return [...new Set(array)]
// // 2 варик
// // return Array.from (new Set(array))
// }

// console.log(uniqValues([1,1,2,2,3,3,5,6,6,6,6,6,6]))

// // ******************************************************

// WeakMap можно избегать различных утечек данных
let obj = {name:'weakmap'}

// const arr = [obj]

// obj = null

// console.log (arr[0])

const map = new WeakMap([ [obj,'obj data'] ])
// get set delete has


obj = null

// console.log(map.has(obj))

// ==========

// const cache = new WeakMap()

// function cacheUser(user){
// if (!cache.has(user)){
// cache.set(user,Date.now())
// }
// return cache.get(user)
// }


// let lena = { name:'Lenok'}
// let alex = { name: 'Alexor'}

// cacheUser(lena)
// cacheUser(alex)

// lena = null
// console.log(cache.get(lena))
// console.log(cache.has(alex))


// *******************
// WeakSet

const users = [
{name:'Elena'},
{name:'Vasy'},
{name:'Varvara'},
{name:'Oleg'}
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users.splice(1,1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))

console.log(users)