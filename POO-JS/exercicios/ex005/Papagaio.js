import { Animal } from "./Animal.js";

class Papagaio extends Animal {
    constructor(nome="", patas=null, classe="", familia="", ordem="", genero="", raca="", palavrasFaladas=[], voando=false, altura=0) {
        super(nome, patas, classe, familia, ordem, genero, raca)
        this.#palavrasFaladas = palavrasFaladas
        this.#voando = voando
        this.#altura = altura
    }

    #voando
    #palavrasFaladas
    #altura


    som() {
        this.#palavrasFaladas.forEach(element => {
            console.log(`O Papagaio ${this.nome} disse ${element}`)
        });
        return ("Esse bicho não cala a boca")
    }

    voar() {
        if (this.#voando) {
            this.#altura = this.#altura + 10
            return `O ${this.nome} está voando a ${this.#altura} pés de altura` 
        } else return `É preciso que o ${this.nome} saia da gaiola antes de voar`
    }

    colocarGaiola() {
        this.#voando = false
        return `O ${this.nome} está voltando para a gaiola`
    }

    tirarGaiola() {
        return `O ${this.nome} está saindo da gaiola`
    }
}

const chopin = new Papagaio("Frédéric Chopin", 2, "Aves", "Psittacidae", "Psitaciformes", "Amazona", "Papagaio-verdadeiro", ["Olá", "Loro", "Corinthians"], true, 20)

console.log(chopin)

console.log(chopin.som())
console.log(chopin.comer())
console.log(chopin.dormir())
console.log(chopin.voar())
console.log(chopin.voar())
console.log(chopin.colocarGaiola())
console.log(chopin.tirarGaiola())