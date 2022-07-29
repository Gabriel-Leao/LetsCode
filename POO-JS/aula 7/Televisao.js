class Endereco {
    constructor(rua, numero, cep, bairro, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.cep = cep
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
}

class Fabricante {
    constructor(nome, fundadoEm, paisDeOrigem, endereco) {
        this.nome = nome
        this.fundadoEm = fundadoEm
        this.paisDeOrigem = paisDeOrigem
        this.endereco = endereco
    }
    getEndereco() {
        // destructing
        const {rua, numero, cep, bairro, cidade, estado} = this.endereco
        return `${rua}, ${numero} - ${cep} ${bairro} - ${cidade} - ${estado} `
    }
}

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
const enderecoSamsung = new Endereco("R Tokio", 123, 08030200, "Okinawa", "Tokio", "TK");
const enderecoLg = new Endereco("R States", 4321, 08040160, "Orlando", "Florida", "US")

const fabricanteSamsung = new Fabricante("Samsung", 1969, "Coreia do sul", enderecoSamsung)
const fabricantelg = new Fabricante("LG", 1947, "Coreia do sul", enderecoLg)

const samsung = new Televisao(fabricanteSamsung, 5, 25, 50, false)
const lg = new Televisao(fabricantelg, 4, 15, 45, true)

console.log(samsung)
console.log(lg)

try {
    samsung.mudarCanal(5)
} catch (error) {
    console.log(error)
}

console.log("Se não usar o try-catch o script é interrompido, e essa mensagem não apareceria.")