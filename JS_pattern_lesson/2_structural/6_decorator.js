// позволяет добавлять к сущ-им классам ,какой - либо фун-ал

class Server {
    constructor(ip,port){
        this.ip = ip
        this.port = port
    }
    get url(){
        return `https://${this.ip}:${this.port}`
    }
    get urls(){
        return 'Helloooo'
    }
}

function aws(server){
    server.aws = true
    server.awsInfo = function(){
        return server.url
    }
    return server
}

function azure(server){
    server.isAzure = true
    server.port += 500
    return server
}


const app10 = aws(new Server(`10.24.0.98`,8080))
console.log(app10.aws)
console.log(app10.awsInfo())

const app20 = azure(new Server('10.24.0.100',0))

console.log(app20.isAzure)
console.log(app20.url)