// Importação do modulo no nodejs (commonjs)
/* const Endereco = require("./Endereco")
const Fabricante = require("./Fabricante")
const Televisao = require("./Televisao") */

// Importação do módulo no navegador (ES Modules)
// Para usar crie um arquivo package.json, para isso use o comando npm init
import { Endereco } from "./Endereco.js";
import { Fabricante } from "./Fabricante.js";
import { Televisao } from "./Televisao.js";

const enderecoSamsung = new Endereco("R Tokio", 123, 18030200, "Okinawa", "Tokio", "TK");
const enderecoLg = new Endereco("R States", 4321, 18040160, "Orlando", "Florida", "US")

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