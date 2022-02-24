class Car {
    constructor(model,price){
        this.model = model
        this.price = price
    }
}

class CarFactory{
    constructor(a,b){
        this.cars = []
        this.a = a
        this.b = b
    }
    create(model,price){
    const candidate = this.getCar(model,price)
    if (candidate){
        return candidate
    }

    const newCar = new Car (model,price)
    this.cars.push(newCar)
    return newCar
    }

    getCar(model){
        return this.cars.find(car => car.model === model)
    }
}

const factory  = new CarFactory

const b = factory.create('Lada','100$')
const a = factory.create('bmw','1000$')
const c = factory.create('bmws','10000$')
// console.log (b === c)
const factorys  = new CarFactory ('1','2')
console.log(factorys)