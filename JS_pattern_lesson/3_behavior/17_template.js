class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    resposnsibilities(){

    }
    work(){
        return `${this.name} выполняет ${this.resposnsibilities()} `
    }

    getPaid(){
        return `${this.name} имеет ЗП ${this.salary}`
    }   
}

class Developer extends Employee {
    constructor(name,salary){
        super(name,salary)
    }
    resposnsibilities(){
        return `Создание программ`
    }
}

class Tester extends Employee {
    constructor(name,salary){
        super(name,salary)
    }
    resposnsibilities(){
        return `Создание программ`
    }
}

const dev = new Developer ('Tima',100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Lena',60000)

console.log(tester.getPaid())
console.log(tester.work())