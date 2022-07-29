const array = [0,1,2,3,4]

console.log(array)
// ... é o spread operator ele destrutura o array deixando apenas os valores para sobreescrever o spread operator tem que passar depois do spread
console.log(...array)

const array1 = [5,6,7,8,9]

// Junta os dois arrays em um só
const array2 = [...array, ...array1]
console.log(array2)
// Olhe a estrutura do min
console.log(`Esse é o menor número do array2: ${Math.min(...array2)}`)

function min(...values) {
    let minNumber = values[0]
    for (let i = 1; i < values.length; i++) {
        if (values[i] < minNumber) {
            minNumber = values[i]
        }
    }
    return minNumber
}

const humano_leticia = {
    nome: "Letícia Pardini",
    idade: 26,
    peso: 60,
    altura: 1.625,
    bomHumor: true,
    nacionalidade: "brasileira",
    naturalidade: "sul-matogrossense",
}
console.log(humano_leticia)

const nova_leticia = {
    xp: 900,
    ...humano_leticia,
    // para sobreescrever o spread operator é preciso passar o que deseja modificar depois do spread operator
    nome: "Letícia Pardini Figueredo",
};
console.log(nova_leticia);

console.log(`Essa é a função min criada por mim, ela retorna o menor número no array. No caso: ${min(2,3,1,24)}`)

// Concatena tudo em um array só
const array3 = [0, ...array1, 10]
console.log(array3)

// destrutura o array e salva em outras variaves. caso não tenha mais valores no array ele salva um array vazio. se for um objeto tem que passar o nome do atributo e tem que usar as chaves {} no lugar dos colchetes
const [priElemento, segundo, terceiro, ...resto] = array1
console.log(priElemento, segundo, terceiro, resto)
console.log(`Este é o 1° elemento é ${priElemento}, o 2° elemento é ${segundo}, o 3° elemento é ${terceiro} e o  resto é ${resto}`)