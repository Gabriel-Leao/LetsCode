let dados = fetch('./teste.json').then(response => response.json()).then(data => { dados = data; console.log(dados)})

let palavras = ["python", "javascript", "java", "php"]
console.log(palavras)
// retorna array com o indice e o valor uma mistura de keys com values
for (let entry of palavras.entries()) {
    console.log(`Essas são as linguagens e suas posiçoes ${entry}`)
}
// entrie destruturizado
for (let [indice, valor] of palavras.entries()) {
    console.log(`A linguagem ${valor} está na posição ${indice} do array`)
}
// retorna as chaves dentro do array
for (let keys of palavras.keys()) {
    console.log(`Essas são as chaves do array ${keys}`)
}
// retorna o valor dentro do array
for (let values of palavras.values()) {
    console.log(`Esses são os valores do array ${values}`)
}

let numeros = [14,23,98,8,5,1,2,900,47,3]
// sintax do sort, a-b == do maior para o menor, e b-a== do maior para o menor
console.log(numeros.sort((a, b) => a - b))
console.log(numeros.sort((a, b) => b - a))
//  ele procura o valor até encontrar dentro do array. no exemplo ele vai printar os itens até encontrar a palavra java, deixando o php de fora
    const foundJava = palavras.find((palavra, index) => {
        console.log(palavra, index)
        return palavra == "java"
    })
    console.log(`Achei a palavra ${foundJava}`)
// index é a posição no array, obj o valor e arrayObjs é o array por completo. A ordem pode ser mudada. Essa é a estrutura padrão de funções de alta ordem de array
const teste1= palavras.forEach(((obj, index, arrayObjs) => {
    console.log(index, obj, arrayObjs)
}))

const produtos = [{
    Nome: "Notebook",
    preco: 1200
},
{
    Nome: "xbox",
    preco: 500
},
{
    Nome: "carregador",
    preco: 200
},
{
    Nome: "controle",
    preco: 150
},
{
    Nome: "bateria",
    preco: 100
}]
// vai gerar um novo array com apenas os nomes dos produtos
const produtosNomes = produtos.map((produto) => produto.Nome)
console.log(`Esses são os meus produtos ${produtosNomes}`)
// Faz transformação do valor e retorna um novo array. no exemplo pega os preco dos produtos e multiplica por 5
const precoEmReais = produtos.map(obj => obj.preco * 5)
console.log(`Esse aqui é o preço dos produtos em reais ${precoEmReais}`)
// a = acomulador vai somar o b.preco que percorre os precos de todo o array e retorna o total
const valorSomado = produtos.reduce((a, b) => a + b.preco, 0)
console.log(`O valor total em dólares é US$ ${valorSomado.toFixed(2)}`)

// os dois junto vão multiplicar os precos dos produtos em 5 e depois soma-los retonando o total da soma
const totalEmReais = produtos.map(obj => obj.preco * 5).reduce((a, b) => a + b, 0)
console.log(`O valor total em reais é R$ ${totalEmReais.toFixed(2)}`)

// filtra todos os produtos com o valor menor ou igual a 200
const baratos = produtos.filter((produto) => produto.preco <= 200)
console.log(baratos)