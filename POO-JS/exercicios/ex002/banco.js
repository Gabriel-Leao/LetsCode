function Conta(agencia=0, numero=0, digito=0, saldo=0, titular="", tipo="") {
    this.agencia = agencia
    this.numero = numero
    this.digito = digito
    this.saldo = saldo
    this.titular = titular
    this.tipo = tipo
    this.banco = "Caixa"
}

Conta.prototype.movimentos = new Array

Conta.prototype.extrato = function() {
    this.movimentos.forEach(element => {
        console.log(`Você ${element}`)
    });
}

Conta.prototype.depositar = function(valor) {
    this.movimentos.push(`Depositou ${valor}`)
    return this.saldo += valor
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo >= valor) {
        this.movimentos.push(`Sacou ${valor}`)
        return this.saldo -= valor
    } else return console.log("Saldo insuficiente!")
}

Conta.prototype.transferir = function(valor, conta) {
    if (this.saldo >= valor) {
        this.saldo - valor
        conta.saldo += valor
        this.movimentos.push(`Transferiu ${valor}`)
        return console.log("Transferência realizada com sucesso!")
    } else return console.log("Saldo insuficiente!")
}

const contaGabriel = new Conta
const contaJulia = new Conta

contaGabriel.depositar(2500)
contaGabriel.sacar(500)
contaGabriel.transferir(1000, contaJulia)

console.log(contaJulia)

console.log(contaGabriel.extrato())