import { Animal } from "./Animal.js";

class Gato extends Animal {
    constructor(nome="", patas=null, classe="", familia="", ordem="", genero="", raca="" , vidas=null) {
        super(nome, patas, classe, familia, ordem, genero, raca)
        this.#vidas = vidas
    }
    #vidas
    
    som() {
        return "Miau, Miau"
    }

    atirarPauNoGato() {
        if (this.#vidas > 0) {
            return this.#vidas --
        }
        else return `O seu gato ${this.nome} Morreu`
    }
}

const mozart = new Gato("Amadeus Mozart", 4, "Mamíferos", "Felídeos", "Carnivora", "Felis", "Persa", 5)

console.log(mozart)
console.log(mozart.som())
console.log(mozart.atirarPauNoGato())
console.log(mozart.atirarPauNoGato())
console.log(mozart.atirarPauNoGato())
console.log(mozart.atirarPauNoGato())
console.log(mozart.atirarPauNoGato())
console.log(mozart.atirarPauNoGato())