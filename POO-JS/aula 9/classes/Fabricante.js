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
// Exportação do modulo no nodejs (commonjs)
// module.exports = Fabricante

// Exportação do módulo no navegador (ES Modules)
export {Fabricante}