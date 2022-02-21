class SimpleMemberShip {
    constructor(name){
        this.name = name
        this.cost = 50 
    }
}
class StandartMemberShip {
    constructor(name){
        this.name = name
        this.cost = 150 
    }
}
class PremiumMemberShip {
    constructor(name){
        this.name = name
        this.cost = 500
    }
}
// static статичская ссылка
class MemberFactory{
    static list ={
        simple: SimpleMemberShip,
        standard:StandartMemberShip,
        premium:PremiumMemberShip
    }
    create (name,type = 'simple'){
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function(){
            console.log(`${this.name} (${this.type}):${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()
const members = [
    factory.create('Vladilen','Simple'),
    factory.create('Elena','Premium'),
    factory.create('Vasilisa','standard'),
    factory.create('Ivan','Premium'),
    factory.create('Stasik')
]
// members.forEach(m=>{
//     // console.log(m.define())
//     m.define()
// })
console.log(typeof members.type)
class OneClass {
    constructor(name,age){
        this.name = name
        this.status = 'ok'
        this.stage = age
    }
}
class TwoClass {
    constructor(name,age){
        this.name = name
        this.status = 'normal'
        this.stage = age
    }
}
class ThreeClass {
    constructor(name,age){
        this.name = name
        this.status = 'bad'
        this.stage = age
    }
}
class MotherClass{
    static spisok = {
        one   :OneClass,
        two   :TwoClass,
        three :ThreeClass
    }
    create (name,age = 'three'){
        const obrazec = MotherClass.spisok[age] || MotherClass.spisok.three
        const sozdanoe = new obrazec(name)
        sozdanoe.age = age
        sozdanoe.az = function () {
            console.log(`name is ${this.name} and age ${this.age} and ${this.status} `)
        }
      return sozdanoe
    }
}

const azaza  = new MotherClass()
const people = [
    azaza.create('Vasy','one'),
    azaza.create('Vasy'),
    azaza.create('Vasy','two')
]

people.forEach(m=>{
    return m.az()
})