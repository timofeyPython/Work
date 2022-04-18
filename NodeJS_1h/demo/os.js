const os = require('os')

console.log('OS',os.platform())
console.log('Archeticture',os.arch())
console.log('Archeticture',os.cpus())
console.log('Free memory',os.freemem())
console.log('All memory',os.totalmem())
console.log('Home directory',os.homedir())
console.log('In job',os.uptime())