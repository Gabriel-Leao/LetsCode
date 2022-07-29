// Declaração de array
let arr = [1, 2, 3,"Leão", ["novo", 1, 2, 3]]
console.log(arr)

// Declaração de array usando construtor
let arr1 = new Array("Gabriel")
console.log(arr1)

// Mostra a quantidade de itens no array
console.log("lenght: " + arr.length)

// Acessando os itens no array
console.log("Acessando um indice: " + arr[3])

// Acessando um array dentro de outro
console.log("Acessando um indice: " + arr[4][0])

// funções dentro de array
let arr2 = [{
    andar: function() {
        console.log("Andando")
        return "andou"
    },
    dirigir: function() {
        console.log("Dirigindo")
        return "dirigiu"
    }
},
{
    nadar: function() {
        console.log("Nadando")
        return "nadou"
    },
    voar: function() {
        console.log("Voando")
        return "voou"
    }
}]

// A vírgula separa os obejetos dento da lista
console.log("Lenght: " + arr2.length)

// Utilizando a função
console.log(arr2[0].andar())
console.log(arr2[1].voar())

let array = [1,2,"Anna",4]

// Adiciona itens no final da lista
array.push("Suelen")

// Adiciona itens no começo da lista
array.unshift("Gabriel")

console.log(array)

// Remove o primeiro item da lista, retorna o valor que foi retirado
console.log(array.shift())
console.log(array)

// Remove ultimo item da lista, retorna o valor que foi retirado
console.log(array.pop())
console.log(array)

// Procura o item "Anna" na lista e volta a sua posição
let x = array.indexOf("Anna")
console.log(x)

// Vai subustituir o item na posição "X" na lista
array[x] = "Carlos"

console.log(array)

array = array.join("*")

console.log("Lenght: " + array.length)
console.log(array)

// last int first out
let lifo = [1,2,3,4]

console.log(lifo)
console.log(lifo.push(5))
console.log(lifo)
console.log(lifo.pop())
console.log(lifo)

//First in First out 
let fifo = [1,2,3,4]

console.log(fifo)
console.log(lifo.push(5))
console.log(lifo)
console.log(lifo.shift())
console.log(lifo)