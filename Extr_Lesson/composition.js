function createProgrammer(name){
    const programmer = {name}
    return{
        ...programmer,
        ...canCode(programmer)
    }
}
function canCode ({name}){
    return {
        code:()=>console.log(`${name} is coding in EASY...`)
    }
}

function canAngular ({name}){
    return {
        angular:()=>console.log(`${name} is coding in ANGULAR...`)
    }
}

function canBackend ({name}){
    return {
        backend:()=>console.log(`${name} is coding in BACK...`)
    }
}

function createFrontend(name){
    const programmer = createProgrammer(name)
    return {
        ...programmer,
        ...canAngular(programmer)
    }
}

function createBackend(name){
    const programmer = createProgrammer(name)
    return {
        ...programmer,
        ...canBackend(programmer)
    }
}

 


function createFullstack(name){
    const programmer = createProgrammer(name)
    return {
        ...programmer,
        ...canBackend(programmer),
        ...canAngular(programmer)
    }
}

const programmer = createProgrammer('Dima')
programmer.code()

const programmer1 = createFrontend('Rima')
programmer1.angular()

const programmer2 = createBackend('Fima')
programmer2.backend()

const programmer3 = createFullstack('Sima')
programmer3.code()
programmer3.angular()
programmer3.backend()