console.log("=== CONSTRUCTOR PATTERN ===")

// Função com a primeira letra maiuscula significa que ela foi feita para criar objetos
function Conta(agencia=0, numero=0, digito=0, saldo=0, titular=null, tipo="Corrente") {
    // propriedades
    this.agencia = agencia
    this.numero = numero
    this.digito = digito
    this.saldo = saldo
    this.titular = titular
    this.tipo = tipo

    // métodos adicionar ao corpo do construtor == má pratica
/*     this.sacar = function() {}
    this.depositar = function() {}
    this.transferir = function() {}
    this.extrato = function() {
        return this.saldo
    } */ 
}

// métodos adicionar ao prototipo do construtor == boa pratica
// Fica dentro do prototype e fica gravado apenas uma vez na memória
// o que for reaproveitável colocar no prototype
Conta.prototype.extrato = function() {
    return this.saldo
}

Conta.prototype.banco = function() {
    return "Caixa"
}

Conta.prototype.depositar = function(valor) {
    return this.saldo += valor
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo >= valor ) {
        return this.saldo -= valor
    } else {
        return console.log(`Saldo insuficiente! o seu saldo é de ${this.saldo}`)
    }
}

Conta.prototype.transferir = function(valor, conta) {
    this.sacar(valor)
    conta.depositar(valor)
    return this.saldo
}


// criar um novo objeto chamado conta, é obrigatório passar o "new" antes
const contaGabriel = new Conta(836, 177, 9, 1500, "Gabriel", "Popança")
const contaLeao = new Conta(842, 556, 7, 500, "Leao", "Corrente")
// Conta gabriel
console.log(contaGabriel)
// Fica dentro do prototype
console.log(contaGabriel.extrato())
console.log(contaGabriel.banco())
console.log(contaGabriel.depositar(200))
console.log(contaGabriel.sacar(160))
console.log(contaGabriel.transferir(100, contaLeao))

// Conta leao
console.log(contaLeao)
// Fica dentro do prototype
console.log(contaLeao.extrato())
console.log(contaLeao.banco())
console.log(contaLeao.depositar(800))
console.log(contaLeao.sacar(400))

console.log(new Conta())