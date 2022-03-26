const map = new Map(
    [['a',1,],['b',2]]
)
// console.log(map)
// console.log(map.set(42,'Let'))
// console.log(map.has('b')) 
// console.log(map.size)
// map создает новый массив с ключами и значениями ,есть 3 метода 
// console.log(map.keys())
// console.log(map.entries())
// console.log(map.values())

// set представляет массив с особенностями ,"чистый массив без дублей" ,дубли удаляется 
const set = new Set([1,1,2,3,4,5,6,7,8])
// console.log(set)
// console.log(set.size)
// // console.log(set.add([12,11,10,9,12]))
// console.log(set.add(9))
// set.clear()
// set.delete(1)
// console.log(set)
// есть возможность вызвать методы анологичны map 
console.log(set.keys())
console.log(set.entries())
console.log(set.values())