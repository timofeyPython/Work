class Programmer {
    constructor(name){
        this.name = name
    }
    code(){
        console.log(`Проверка : ${this.name}`)
    }
}

class Fronted extends Programmer{
    angular(){
        console.log(`Что то умеет фронт : ${this.name}`)
    }
} 
 
class Backed extends Programmer{
    nodejs(){
        console.log(`${this.name} is JS`)
    }
}

 


const programmer = new  Programmer ('Proger')
programmer.code()

const fronted = new Fronted ('Frontend')
fronted.angular()

const backed = new Backed ('Backed')
backed.code()
backed.nodejs()