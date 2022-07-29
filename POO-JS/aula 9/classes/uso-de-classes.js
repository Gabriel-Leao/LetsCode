// Importação do modulo no nodejs (commonjs)
/* const Endereco = require("./Endereco")
const Fabricante = require("./Fabricante")
const Radio = require("./Radio") */

// Importação do módulo no navegador (ES Modules)
// Para usar crie um arquivo package.json, para isso use o comando npm init
import { Endereco } from "./Endereco.js";
import { Fabricante } from "./Fabricante.js";
import { Radio } from "./Radio.js";
import { Televisao } from "./Televisao.js";

const tokio = new Endereco("R Tokio", 123, 18030200, "Okinawa", "Tokio", "TK")
const gradiente = new Fabricante("Gradiente", 1980, "Brasil", tokio)
const radio = new Radio("89", gradiente, 20, false)


try {
    console.log(radio)
    console.log(radio.info())
    console.log(radio.ligarDesligar())
    console.log(radio.aumentarVolume())
    console.log(radio.diminuirVolume())
    console.log(radio.mudarEmissora("99.3"))
    console.log(radio.info())
} catch (error) {
    console.log(error)
}


const states = new Endereco("R States", 4321, 18040160, "Orlando", "Florida", "US")
const samsung = new Fabricante("Samsung", 1969, "Coreia do sul", states)
const televisao = new Televisao(5, samsung, 20, false, 50)

try {
    console.log(televisao)
    console.log(televisao.info())
    console.log(televisao.ligarDesligar())
    console.log(televisao.aumentarVolume())
    console.log(televisao.diminuirVolume())
    console.log(televisao.mudarEmissora(4))
    console.log(televisao.info())
} catch (error) {
    console.log(error)
}