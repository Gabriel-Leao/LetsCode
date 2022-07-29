import { Animal } from "./Animal.js";

class Cachorro extends Animal {
    constructor(nome="", patas=null, classe="", familia="", ordem="", genero="", raca="", velocidade=10) {
        super(nome, patas, classe, familia, ordem, genero, raca)
        this.#velocidade = {
            min: 0,
            max: 0,
            atual: velocidade
        }
        
    }
    #velocidade

    som() {
        return "Au Au"
    }

    correr() {
        if (this.#velocidade.atual == this.#velocidade.max) {
            return `O ${this.nome} da raça ${this.raca} está correndo a ${this.#velocidade.atual}Km/h isso é o máximo que ele consegue`
        }
        this.#velocidade.atual ++
        return `O ${this.nome} da raça ${this.raca} está correndo a ${this.#velocidade.atual}Km/h`
    }

    parar() {
        if (this.#velocidade.atual == this.#velocidade.min){
            return `O ${this.nome} da raca ${this.raca} está parado`
        } else {
            this.#velocidade.atual --
            return `O ${this.nome} da raca ${this.raca} está diminuindo a velocidade`
        }
    }

}

const beethoven = new Cachorro("Ludwig van Beethoven", 4, "Mamíferos", "Canídeos", "Carnívoros", "Canis", "Galgo Inglês", 20)

console.log(beethoven)
console.log(beethoven.som())
console.log(beethoven.correr())
console.log(beethoven.parar())