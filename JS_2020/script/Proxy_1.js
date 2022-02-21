const person = {
    name:'Tima',
    age:25,
    job:'Progger'
}

const op = new Proxy(person,{
    get(target,prop){
        if (!prop in target){
            prop
            .split('_')
            .map(p => target[p]
            .join (' '))
        }
         console.log(`Getting prop ${prop}`)
        return target[prop]
    },
    set(target,prop,value){
        if (prop in target){ 
        target[prop] = value    
        }else{
            throw new Error (`No ${prop} field in target`)
        }
    },
    has(target, prop){
        return ['age','name','job'].includes(prop)
    },
    deleteProperty(target,prop){
        if (prop in target){ 
        console.log(`Удаляем ${prop}`)
        delete target[prop]
        return true
        }else{
            console.log('Дебил')
        }
    }
})

//funct 
const log = text => `Log ${text}`

const fp = new Proxy(log,{
    apply(target,thisArg,args){
        console.log('callin fn...')
    target.apply(thisArg,args).toLowerCase()

    return target.apply(thisArg, args)
    }
})

class Person1 {
    constructor(name,age){ 
    this.name = name
    this.age = age
    }
}

const persona = new Proxy(Person1,{
    construct(target,args){
        console.log('Construct...')
       
        return new Proxy(new target(...args),{
            get(t,prop){
                console.log(`Geeting prop ${prop}`)
                return t[prop]
            },
            
            set(t,prop,value){
                console.log('lite')
            }
        })
    }
})

const pas = new persona ('Maxim',32)