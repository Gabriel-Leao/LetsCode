//Média e Produto 
function calcula__media(n1, n2) {
  let n1txt = n1
  let n2txt = n2
  let numero1 = parseInt(n1txt.value)
  let numero2 = parseInt(n2txt.value)
  let media = (numero1 + numero2) / 2 
  let produto = calcula__produto(n1, n2)
  let resp = document.getElementById("media-produto")
  resp.innerText = `A média dos números é ${media} e o produto dos números é ${produto}`
  return resp
}

// calcula produto
function calcula__produto(n1, n2) {
  let n1txt = n1
  let n2txt = n2
  let p1 = parseInt(n1txt.value)
  let p2 = parseInt(n2txt.value)
  let produto = p1 * p2
  return produto   
}

      // Media ponderada
function media__ponderada(mat, peso1, peso2, nota1, nota2, resposta) {
  let peso1__txt = peso1
  let peso2__txt = peso2
  let peso1__valor = parseInt(peso1__txt.value)
  let peso2__valor = parseInt(peso2__txt.value)
  let media = (calcula__produto(nota1, peso1) + calcula__produto(nota2, peso2)) / (peso1__valor + peso2__valor)
  let matricula__txt = mat
  let matricula = parseInt(matricula__txt.value)
  let resp = resposta
  resp.innerText = `O aluno com a matrícula ${matricula} tem a média ponderada de ${media.toFixed(2)}`
  return resp
}

          //Conta
function conta(valor__conta) {
  let valor__txt = valor__conta
  let valor = parseFloat(valor__txt.value)
  let valor__total = valor + (valor * (10 / 100))
  let resp = document.getElementById("resp-conta")
  resp.innerText = `O valor da conta com a gorjeta de 10% é R$${valor__total.toFixed(2)}`
  return resp
}

// INSS -10%
function INSS(n1) { 
  let valor__bruto = n1
  let valor__desconto = valor__bruto - (valor__bruto * (10 / 100))
  return valor__desconto
}

// FGTS -8%
function FGTS (n1) {
  let valor__bruto = n1
  let valor__desconto = valor__bruto - (valor__bruto * (8 / 100))
  return valor__desconto
}

// Plano de saude -100
function plano__saude(n1) {
  let valor__bruto = n1
  let valor__desconto = valor__bruto - 100
  return valor__desconto
}

function salario__liquido() {
  let valor__txt = document.getElementById("salario-bruto")
  let valor__bruto = parseFloat(valor__txt.value)
  let desconto__inss = INSS(valor__bruto)
  let desconto__fgts = FGTS(valor__bruto)
  let desconto__saude = plano__saude(valor__bruto)
  let descontos = (valor__bruto - desconto__inss) + (valor__bruto - desconto__fgts) + (valor__bruto - desconto__saude)
  let salario__liquido = valor__bruto - descontos
  let resp = document.getElementById("resp-valor")
  resp.innerText = `O valor liquido é R$${salario__liquido.toFixed(2)}`
  console.log("Não entendi se era para calcular todos os descontos sobre o valor bruto ou apenas o inss, acabei calculando todos")
  return resp
}