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
// Exportação do modulo nodejs (commonjs)
// module.exports = Endereco

// Exportação do módulo no navegador (ES Modules)
export {Endereco}