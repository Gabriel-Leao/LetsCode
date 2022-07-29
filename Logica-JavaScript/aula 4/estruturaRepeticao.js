let nomes = ["Gabriel", "Suelen", "Maria", "Olívia"]
let count = 0
let leng = nomes.length

while (count < leng) {
    console.log("Seja bem vindo " + nomes[count])
    count ++
}

let count1 = 5
// Ele executa primeiro o código depois ver se a condição é verdadeira
do {
    console.log("Valor de count no do while: " + count1)
    count1 ++
}
while(count1 <= 10)

let senha

do {
    senha = prompt("Digite a sua senha: ")
} while (senha != "chocolate")
console.log(senha)

let numero = 5
// inicialização, condição e adiciona mais um ao i
for(let i; i<= numero; i++) {
    console.log("É " + i)
}

// for in
let arr = ["A","B","C","Gabriel"]

// O for in percore o índice
for (let i in arr) {
    console.log(i)
}

// Mostra o que tá dentro do indice
for (let i of arr) {
    console.log(i)
}