// позволяет последовательно вызывать у одного и того же объекта  набор операций и последовательно их модофицировать 
class MySum{
    constructor(initialValue = 42 ){
        this.sum  = initialValue
    }
    
    add(value){
        this.sum += value
        
        return this
    }
}

const sum1 = new MySum()

console.log(sum1.add(42).add(2).add(33))

const sum2 = new MySum(0)

console.log(sum2.add(1).add(2).add(3))