import { Eletronico } from "./Eletronico.js";

// filho/herança
class Radio extends Eletronico {
    // É preciso usar o extends e passar o objeto pai
    static emissoras = {
        "89": "RADIO ROCK FM",
        "99.3": "CIDADE FM",
        "100.9": "JOVEM PAM FM",
        "88.1": "GAZETA"
    }

    // polimorfismo - reescrita do método
    info() {
        return `O seu aparelho ${this.fabricante.nome} está ${(this.estado) ? `ligado e sintonizado na emissora ${Radio.emissoras[this.emissora]}`: 'desligado'}`
    }
}

export {Radio}