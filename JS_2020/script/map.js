const obj = {
    name:'tima',
    age : 26,
    job: 'Prog'
}

const entriess = [
    ['name','Tima'],
    ['age',26],
    ['job','Fullstack']
]
// Object класс у которого два метода ,позволяет транспортировать из массива в объект и обратно
// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entriess))

const map = new Map(entriess)

map
    .set('newField',42)
    .set(obj,'Value of object')
    .set(NaN,'Nan ??')

// console.log(map.get(NaN))


// map.delete('job')

// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// итерация карты 
// for (let [key,value] of map.entries()){
//     console.log(key ,value)
// }

// итарация по значению или ключу
// for (let val of map.values()){
//     console.log(val)
// }
// for (let key of map.keys()){
//     console.log(key)
// }

// Итерация с другим методом
// map.forEach((val,key,m)=>{
//     console.log(val,key)
// })

// ==============

// const array = [...map]
// const array = Array.from(map)

// const mapObj = Object.fromEntries (map.entries())


// console.log(mapObj)

// ================

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visit = new Map()

visit
    .set(users[0],new Date())
    .set(users[1],new Date(new Date ().getTime() + 1000 * 60 ))
    .set(users[2],new Date(new Date ().getTime() + 5000 * 60 ))


function lastVisit (user){
    return visit.get(user)
}

console.log(lastVisit(users[0]))
