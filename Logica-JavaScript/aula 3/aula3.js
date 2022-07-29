// && == and, || == or, ! == not, != diferente, <= menor ou igual, >= maior ou igual, = recebe, == comparando valores, === comparando valores e tipo
// Truthy e Falsy
if (1) {
  console.log("Truthy")
} else {
  console.log("Falsy")
}

// Truthy e Falsy
if (0) {
  console.log("Truthy")
} else {
  console.log("Falsy")
}

// Truthy e falsy
if (undefined) {
  console.log("Truthy")
} else {
  console.log("Falsy")
}

// Truthy e falsy
if (null) {
  console.log("Truthy")
} else {
  console.log("Falsy")
}

// Truthy e falsy
if (parseFloat("Leão lindo")) {
  console.log("Truthy")
} else {
  console.log("Falsy")
}

let num = parseInt(prompt("Digite um número "))
if (num || num == 0) {
  alert("Número válido")
} else {
  alert("Número inválido")
}

let altura = parseFloat(prompt("Digite a sua altura em metros: "))
let peso = parseFloat(prompt("Digite o seu peso: "))

function calcula__imc(peso, altura) {
  return peso / altura ** 2
}

let imc = calcula__imc(peso, altura)
alert(`O seu imc é ${imc.toFixed(1)}`)

if (imc < 18.5) {
  alert("Vocẽ está com baixo peso")
} else if (imc < 25) {
  alert("Você está no peso ideal")
} else if (imc < 30) {
  alert("Você está com sobre peso")
} else if (imc < 35) {
  alert("Você está com obesidade grau |")
} else if (imc < 40) {
  alert("Você está com obesidade grau ||")
} else {
  alert("Você está com obesidade grau |||")
}