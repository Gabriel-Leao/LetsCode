function soma_5(x) {
  return x + 5    
}
console.log(soma_5(2))  

function soma(x, y) {
  return x + y
}
console.log(soma(2, 5))

function conversor(F) {
  /*const */ C = 5 * ((F-32) / 9);
  return C
}
console.log(conversor(77))
console.log(C)

console.log(conversor(97))
console.log(C)

// função anônima
const print = function(txt) {
  console.log(txt)
}
print("Hello, World!")

// arrow function
const print__foda = (txt) => console.log(txt)
print__foda("Vai Corinthians!")

// funções classe math
console.log(Math.abs(-1))
console.log(Math.ceil(8.145761827279))
console.log(Math.floor(2.9999999))
console.log(Math.round(8.6))
console.log(Math.round(8.3333))
console.log(Math.min(11, 25, 07, 03, 1, 9))
console.log(Math.max(11, 25, 07, 03, 1, 9))
console.log(8 ** 3)
console.log(Math.pow(8, 3))
console.log(Math.sqrt(2))
console.log(Math.random())