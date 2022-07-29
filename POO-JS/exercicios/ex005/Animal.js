class Animal {
    constructor(nome="", patas=null, classe="", familia="", ordem="", genero="", raca="") {
        this.#nome = nome
        this.#patas = patas
        this.#classe = classe
        this.#familia = familia
        this.#ordem = ordem
        this.#genero = genero
        this.#raca = raca
    }
    #nome
    #patas
    #classe
    #familia
    #ordem
    #genero
    #raca

    som() {
        return "pspsps"
    }

    comer() {
        return `O ${this.#nome} está comendo a ração`
    }

    dormir() {
        for (let horas = 0; horas < 8; horas++) {
            console.log(`O ${this.#nome} está dormindo`)
        }
        return `O ${this.#nome} acordou`
    }

    get raca() {
        return this.#raca
    }

    get nome() {
        return this.#nome
    }
}

export {Animal}