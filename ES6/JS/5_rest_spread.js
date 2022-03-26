// averag = (a,...args) =>{

//     return args.reduce((acc,i)=> acc+=i, 0) / arguments.length
// }

// // console.log(averag(10,20,30,40,50))

// // spread 

// const array  = [1 , 2 , 3 , 5 ,  8 , 13 ]
// // console.log(...array)

// console.log (Math.max(...array))
// console.log (Math.min(...array))

// const fib  = [1, ...array]
// console.log(fib)


// Деструктаризация

const array  = [1 ,undefined, 2 , 3 , 5 ,  8 , 13 ]


// const a  = array[0]
// const b  = array[1]

// const [a ,b = 42 ,...c] = array
// console.log(a,b,c)

const object = {
    country:'Rus',
    city:'Moscow',
    steet:'Lenin',
    concat:function(){
        return `Russia lovely ${this.country} and people ${this.city}`
    }
}

// const {city,country,steet,concat:superFunctiom} = object

// console.log(superFunctiom.call(object))
// console.log({...object})
 

const {city,...rest} = object
// console.log({...rest})

const newAddres = {...object, steet:'Tverskaya',code:123}

console.log(newAddres)