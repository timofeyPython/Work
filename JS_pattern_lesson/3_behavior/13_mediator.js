// позволяёт выстраивать тестную коммуникацию объектами разного типа 
class User {
    constructor(name){
        this.name = name
        this.room = 0
    }

    send(message,to){
        this.room.sends(message, this,to)
    }
    recieve(message,from){
        console.log(`${from.name} => ${this.name}:${message}`)
    }
}
 
class ChatRoom{
    constructor() {
        this.users = {}
    }
    register(user){
        this.users[user.name] = user
        user.room = this
    }

    sends(message,from,to){
        if (to){
            to.recieve(message,from)
             }else{
                 Object.keys(this.users).forEach(key=>{
                     if (this.users[key]!== from){
                        this.users[key].recieve(message, from)
                }
            })            
        }
    }
}

const u1 = new User ('Tima')
const u2 = new User ('Vlad')
const u3 = new User ('Dima')

let room = new ChatRoom()

room.register(u1)
room.register(u2)
room.register(u3)

u1.send('Hello!', u2)
u2.send('Hello!', u1)
u1.send('Hello ALL')


 