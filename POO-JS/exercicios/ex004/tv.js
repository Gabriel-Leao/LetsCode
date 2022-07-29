class TV {
    constructor(marca="", canal=5, volume=10, polegadas=40, estado=false) {
        this.#marca = marca
        this.#canal = canal
        this.#volume = {
            min: 0,
            max: 100,
            atual: volume
        }
        this.#polegadas = polegadas
        this.#estado = estado
    }

    #volume
    #canal
    #estado
    #polegadas
    #marca

    static canais = {
        2: "Cultura",
        4: "SBT",
        5: "Globo",
        7: "Record",
        9: "RedeTv",
        11: "Gazeta",
        13: "Band"
    }

    ligarDesligar() {
        return this.#estado = !this.#estado
    }

    mudarCanal(numeroCanal=this.#canal) {
        if(this.#estado &&  TV.canais[numeroCanal] == undefined) {
            return "Canal não encontrado"
        } else if (this.#estado) {
            this.#canal = numeroCanal
            return TV.canais[this.#canal]
        } else return `Sua TV ${this.#marca} de ${this.#polegadas} polegadas está desligada`
    }

    aumentarVolume () {
        if (this.#volume.atual == this.#volume.max) {
            return this.#volume.atual
        } else if (this.#estado) {
            return  this.#volume.atual += 1
        } else {
            return `Sua TV ${this.#marca} de ${this.#polegadas} polegadas está desligada`
        }
    }

    diminuirVolume() {
        if (this.#volume.atual == this.#volume.min) {
            return  this.#volume.atual
        } else if (this.#estado) {
            return  this.#volume.atual -= 1
        } else {
            return `Sua TV ${this.#marca} de ${this.#polegadas} polegadas está desligada`
        }
    }

    info() {
        return `A sua tv ${this.#marca} de ${this.#polegadas} polegadas está ${(this.#estado) ? `ligada e sintonizada no canal ${TV.canais[this.#canal]}`: `desligada`}`
    }
}

const Samsung = new TV("Samsung", 4, 11, 50, true)