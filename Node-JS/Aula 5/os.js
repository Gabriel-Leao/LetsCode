const os = require('os')

console.log("CPUs: ")
console.log(os.cpus())
console.log("Arquitetura: " + os.arch())
console.log("Memória total: " + os.totalmem())
console.log("Memória livre: " + os.freemem())
console.log("Informações de rede: ")
console.log(os.networkInterfaces())
console.log("Nome do host: " + os.hostname())
console.log("Pasta raíz: " + os.homedir())
console.log("Informações do usuário: ")
console.log(os.userInfo())