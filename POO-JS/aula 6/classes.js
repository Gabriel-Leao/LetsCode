console.log("=== CLASSES ===")


// modelo
class Automovel {
    // inicializa o objeto
    constructor(modelo, marca, ano, cor, km=0, preco=0) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.#km = km
        this.#preco = preco
        this.ligado = false
        this.velocidade = {
            min: 0,
            max: 50,
            atual: 0
        }
    }

    // props privadas é preciso colocar a lasanha em frente ao nome da prop
    #preco
    #km

    // metodos
    ligar() {
        return this.ligado = true
    }

    desligar() {
        return this.ligado = false
    }

    acelerar() {
        if (this.velocidade.atual == this.velocidade.max) {
            return this.velocidade.atual
        } else if (this.ligado) {
            return  this.velocidade.atual += 10
        } else {
            return this.velocidade.atual = 0
        }
    }

    frear() {
        if (this.velocidade.atual == this.velocidade.min) {
            return  this.velocidade.atual
        } else if (this.ligado) {
            return  this.velocidade.atual -= 10
        } else {
            return this.velocidade.atual = 0
        }
    }

    // método getter, não permite a mudança do valor e é chamado sem os parênteses
    get preco() {
        return this.#preco
    }

    get km() {
        return this.#km
    }

    // Método setter, permite a mudança do valor e é chamado sem os parênteses. no lugar osa-se o =
    set preco(valor) {
        return this.#preco = valor
    }

    // método privado
    #getCor() {
        return `O ${this.modelo} é da cor ${this.cor}`
    }

    get Cor() {
        return this.#getCor()
    }
}

// Instãncia => vai gerar o objeto
const uno = new Automovel("Uno", "Fiat", 2000, "Verde", 38000, 2600)
console.log(uno)
const palio = new Automovel("Palio", "Fiat", 2015, "Vermelho", 7000, 30000)
console.log(palio)
const celta = new Automovel("Celta", "GM", 2000, "Branco", 50000, 1500)
celta.ligar()
console.log(celta)