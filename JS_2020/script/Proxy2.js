// Wrapper

const withDefaultValue = (target,defaultValue = 0) =>{
    return new Proxy(target,{
        get:(obj,prop)=>(prop in obj? obj[prop]:defaultValue)

    })
}

 

const position = withDefaultValue({
    x:24,
    y:42
},0)

 

// Hidden property

 

const withHiddenProps = (target,prefix = '_') =>{

    return new Proxy(target,{
        has:(obj,prop)=>(prop in obj)&& (!prop.startsWith(prefix)),
        // свойство ownKeys говорит ,какие ключи находятся внутри объекта
        ownKeys: obj => Reflect.ownKeys(obj)//массив из ключей
        .filter(p=>!p.startsWith(prefix)),
        get:(obj,prop,reciever)=> (prop in reciever ? obj[prop]: void 0)  
    })
}

const data = withHiddenProps ({
    name:'Vlad',
    age : 'age',
    _uid: '1231231'
})

// opitimization

const IndexedArray = new Proxy (Array,{
    construct(target,[args]){
        const index = {}
        args.forEach(item => (index[item.id]= item))


        return new Proxy (target(...args),{
            get(arr,prop){

                switch(prop){
                    case 'push': return item =>{
                        arr[prop].call(arr,item)
                    }
                    case 'findById':
                        return id => index[id]    
                    default:
                        return arr[prop]
                }

            }
        })
    }
})

 

const users = new IndexedArray([
    { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
    { id: 22, name: 'Elena', job: 'Student', age: 22 },
    { id: 33, name: 'Victor', job: 'Backend', age: 23 },
    { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }

])