const prompt = require('prompt-sync')
const input = prompt()

const humano = {
    nome: "Julia",
    Sexo: "F",
    idade: 23,
    peso: 57,
    altura: 1.66,
    comer: function(cal=0) {
        this.movimentos.push(`Consomiu ${cal} calorias`)
        if (cal >= 7000) {
            return ++this.peso
        } else return this.peso
    },
    treinar: function(gasto=0) {
        this.movimentos.push(`Gastou ${gasto} calorias`)
        if (gasto >= 7000) {
            return --this.peso
        } else return this.peso
    },
    movimentos: new Array
}

let cal = input('Digite as calorias consumidas: ')
humano.comer(cal)
let gasto = input('Digite as calorias gastadas: ')
humano.treinar(gasto)
console.log(`O peso de ${humano.nome} é de ${humano.peso}KG`)
console.log(humano.movimentos)