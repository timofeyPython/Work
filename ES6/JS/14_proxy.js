const validator = {
    get(target,prop){
        return prop in target ? target[prop] : `Поля ${prop} в объекте нету`
    },
    set(target,prop,value){
        if (value.length > 2){
            Reflect.set(target,prop,value)
            console.log(`Пароль изменен на ${value}`)
        }else{
            console.log('Не достаточная длина символов/Сейчас' + value.length)
        }
    }
    
}

const form = {
    login:'tester',
    password: '12345'
}

const formProxy = new Proxy(form,validator)


formProxy.password = '12'
console.log(formProxy.password)

function log(massage){
    console.log(massage)
}

const proxy = new Proxy (log,{
    apply(target,thisArg,argArray){
        if (argArray.length === 1 ){ 
            Reflect.apply(target,thisArg,argArray)}else{ 
                console.log('Колличество аргументов не совпадает')
        }
    }
})

proxy('1asd','adad')
