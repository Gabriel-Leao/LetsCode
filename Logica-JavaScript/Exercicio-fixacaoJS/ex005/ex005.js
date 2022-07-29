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
const produtosNomes = produtos.map((produto) => produto.Nome)
console.log(`Esses são os meus produtos ${produtosNomes}`)

const precoEmReais = produtos.map(obj => obj.preco * 5)
console.log(`Esse aqui é o preço dos produtos em reais ${precoEmReais}`)

const valorSomado = produtos.reduce((a, b) => a + b.preco, 0)
console.log(`O valor total em dólares é US$ ${valorSomado.toFixed(2)}`)

const totalEmReais = produtos.map(obj => obj.preco * 5).reduce((a, b) => a + b, 0)
console.log(`O valor total em reais é R$ ${totalEmReais.toFixed(2)}`)

const baratos = produtos.filter((produto) => produto.preco <= 200)
console.log(baratos)

function fibonacci(num) {
  if (num < 2) {
      return num;
  } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const termos = prompt('Digite o número de termos que deseja ver da sequencia de fibonacci: ');

for(let i = 0; i < termos; i++) {
  console.log(fibonacci(i));
}