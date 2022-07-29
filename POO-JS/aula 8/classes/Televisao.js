class Televisao {
    constructor(fabricante=null, canal=5, volume=10, polegadas=40, ligada=false) {
        this.#fabricante = fabricante
        this.#canal = canal
        this.#volume = volume
        this.#polegadas = polegadas
        this.#ligada = ligada
    }
    // props
    #canal
    #volume
    #ligada
    #fabricante
    #polegadas
    #canaisAbertos

    //props estáticas
    static msg = {
        "MUDAR_CANAL_EXCEPT": "Não foi possível mudar o canal pois a TV está desligada!",
        "AUMENTAR_VOLUME_EXCEPT": "Não foi possível aumentar o volume pois a TV está desligada!",
        "DIMINUIR_VOLUME_EXCEPT": "Não foi possível diminuir o volume pois a TV está desligada!"
    }

    static canais = {
        2: "Cultura",
        4: "SBT",
        5: "Globo",
        7: "Record",
        9: "RedeTv",
        11: "Gazeta",
        13: "Band"
    }

    // metodos
    ligarDesligar() {
        return this.#ligada = !this.#ligada
    }

    mudarCanal(numero = this.#canal) {
        if (this.#ligada) return this.#canal = numero
        // throw lança uma excessão, um erro, é preciso passar o construtor do error e a mensagem dentro 
        throw new Error(Televisao.msg.MUDAR_CANAL_EXCEPT)
    }

    aumentarVolume() {
        if (this.#ligada) return this.#volume += 1
        throw new Error(Televisao.msg.AUMENTAR_VOLUME_EXCEPT)
    }

    diminuirVolume() {
        if (this.#ligada) return this.#volume -= 1
        throw new Error(Televisao.msg.DIMINUIR_VOLUME_EXCEPT)
    }

    info() {
        // Operador ternário: (condição) ? true : false. Os parênteses não é obrigatório, a interrogação testa a condição
        return `A sua TV ${this.#fabricante.nome} está ${(this.#ligada) ? `ligada, no canal ${Televisao.canais[this.#canal]}`: 'desligada'}`
    }
}
// Exportação do modulo no nodejs (commonjs)
// module.exports = Televisao

// Exportação do módulo no navegador (ES Modules)
export {Televisao}