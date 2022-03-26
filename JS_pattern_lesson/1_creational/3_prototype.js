const car = {
    wheels:4,
    init(){
        console.log(`У меня есть ${this.wheels} колёса ,мой владелец ${this.owner} `)
    }
}
// Object.create (добавляет в объект метод )
const carWithOwner = Object.create(car,{
        
    owner:{
        value: 'Dima'
    }
})
console.log(carWithOwner.__proto__ ===car)
carWithOwner.init()

 