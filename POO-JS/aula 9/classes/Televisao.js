import { Eletronico } from "./Eletronico.js";

// classe de herança
class Televisao extends Eletronico {
    constructor(emissora=null, fabricante=null, volume=10, estado=false, polegadas=0) {
        super(emissora, fabricante, volume, estado)
        this.#polegadas = polegadas
    }

    #polegadas

    static emissoras = {
        2: "Cultura",
        4: "SBT",
        5: "Globo",
        7: "Record",
        9: "RedeTv",
        11: "Gazeta",
        13: "Band"
    }

    // polimorfismo - reescrita do método
    info() {
        return `O seu aparelho ${this.fabricante.nome} está ${(this.estado) ? `ligado e sintonizado na emissora ${Televisao.emissoras[this.emissora]}`: 'desligado'}`
    }
}
// Exportação do modulo no nodejs (commonjs)
// module.exports = Televisao

// Exportação do módulo no navegador (ES Modules)
export {Televisao}