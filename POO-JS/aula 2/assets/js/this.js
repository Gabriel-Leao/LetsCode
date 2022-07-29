console.log("=== USO DO THIS ===")

/*
Conceitos - O que é um objeto?
        |------------|
        |   OBJETO   |
        |------------|
        /            \ 
     CARACTS        AÇÕES
        |-----------|
        |    CAR    |
        |-----------|
       /             \
    PROPS           MÉTODOS
    marca           ligar()
    cor             desligar()
    ano             acelerar()
    modelo          freiar()
    veloMin
    veloMax
*/

const uno = {
    marca: "Fiat",
    modelo: "Uno",
    cor: "Amarelo",
    ano: 1999,
    velocidade: {
        min: 0,
        max: 10,
        atual: 0
    },
    status: false,
    ligar: function () {
        // this é a palavra chave que aponta para o contexto da execução
        // primariamente o this sempre vai apontar para o objeto dentro do escopo
        return this.status = true
    },
    desligar: function () {
        return this.status = false
    },
    acelerar: function () {
        if (this.velocidade.atual == this.velocidade.max) {
            return this.velocidade.atual
        } else if (this.status) {
            // pré incremento
            return  ++this.velocidade.atual
        } else {
            return this.velocidade.atual = 0
        }
    },
    freiar: function () {
        if (this.velocidade.atual == this.velocidade.min) {
            return  this.velocidade.atual
        } else if (this.status) {
            // pré incremento
            return  --this.velocidade.atual
        } else {
            return this.velocidade.atual = 0
        }
    }
}

console.log(uno)
// Acessando um obj dentro de outro obj
console.log(uno.velocidade.min)
console.log(uno.velocidade.max)

console.log(uno.status)