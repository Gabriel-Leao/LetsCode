// Classe pai
class Eletronico {
    constructor(emissora=null, fabricante=null, volume=10, estado=false) {
        this.#emissora = emissora
        this.#fabricante = fabricante
        this.#volume = volume
        this.#estado = estado
    }

    static msg = {
        "SINTONIZAR_EXCEPT": "Não foi possível sintonizar, pois o aparelho está desligado!",
        "AUMENTAR_VOLUME_EXCEPT": "Não foi possível aumentar o volume, pois o aparelho está desligado!",
        "DIMINUIR_VOLUME_EXCEPT": "Não foi possível diminuir o volume, pois o aparelho está desligado!"
    }

    #emissora
    #fabricante
    #volume
    #estado

    get fabricante() {
        return this.#fabricante
    }

    get emissora() {
        return this.#emissora
    }

    get estado() {
        return this.#estado
    }

    ligarDesligar() {
        return this.#estado = !this.#estado
    }

    mudarEmissora(numero = this.#emissora) {
        if (this.#estado) return this.#emissora = numero
        // throw lança uma excessão, um erro, é preciso passar o construtor do error e a mensagem dentro 
        throw new Error(Eletronico.msg.SINTONIZAR_EXCEPT)
    }

    aumentarVolume() {
        if (this.#estado) return this.#volume += 1
        throw new Error(Eletronico.msg.AUMENTAR_VOLUME_EXCEPT)
    }

    diminuirVolume() {
        if (this.#estado) return this.#volume -= 1
        throw new Error(Eletronico.msg.DIMINUIR_VOLUME_EXCEPT)
    }

    info() {
        return `O seu aparelho ${this.#fabricante.nome} está ${(this.#estado) ? `ligado e sintonizado na emissora ${this.#emissora}`: 'desligado'}`
    }
}

export {Eletronico}