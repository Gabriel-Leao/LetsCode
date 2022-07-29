function calcula__media(n1, n2) {
  let nota1 = parseFloat(n1.value)
  let nota2 = parseFloat(n2.value)
  let media = (nota1 + nota2) / 2
  let resp = document.getElementById("resp-media")
  if (media == 10) {
      resp.innerHTML = `<p>A média do aluno foi ${media.toFixed(1)} Aprovado com destaque!</p>`
  } else if (media >= 7) {
      resp.innerHTML = `<p>A média do aluno foi ${media.toFixed(1)} Aprovado!</p>`
  } else {
      resp.innerHTML = `<p>A média do aluno foi ${media.toFixed(1)} REPROVADO!</p>`
  }
}

function calcula__aumento(s) {
  let salario = parseFloat(s.value)
  let resp = document.getElementById("resp-aumento")
  let aumento
  let new__salario
  resp.innerText = `O salário de R$${salario.toFixed(2)}`
  if (salario <=280.00) {
      aumento = salario * (20 / 100)
      new__salario = salario + aumento
      resp.innerText += ` com o reajuste de 20%, teve um aumento de R$${aumento.toFixed(2)}, totalizando R$${new__salario.toFixed(2)}.`
  } else if (salario <= 700.00) {
      aumento = salario * (15 / 100)
      new__salario = salario + aumento
      resp.innerText += ` com o reajuste de 15%, teve um aumento de R$${aumento.toFixed(2)}, totalizando R$${new__salario.toFixed(2)}.`
  } else if (salario <= 1500.00) {
      aumento = salario * (10 / 100)
      new__salario = salario + aumento
      resp.innerText += ` com o reajuste de 10%, teve um aumento de R$${aumento.toFixed(2)}, totalizando R$${new__salario.toFixed(2)}.`
  } else {
      aumento = salario * (5 / 100)
      new__salario = salario + aumento
      resp.innerText += ` com o reajuste de 5%, teve um aumento de R$${aumento.toFixed(2)}, totalizando R$${new__salario.toFixed(2)}.`
  }
}

function calcula__salario(horas__trabalhadas, valor__horas) {
  let horas = parseFloat(horas__trabalhadas.value)
  let valor = parseFloat(valor__horas.value)
  let salario__bruto = horas * valor
  let inss = salario__bruto * (10 / 100)
  let fgts = salario__bruto * (11 / 100)
  let resp = document.getElementById("resp-salario")
  resp.innerHTML = `Salário bruto (${horas} * ${valor}) : R$${salario__bruto.toFixed(2)}<br>`
  if (salario__bruto <= 900.00) {
      let salario__liquido = salario__bruto - inss
      resp.innerHTML += `<p>(-) IR (isento)<br> (-) INSS (10%) : R$${inss.toFixed(2)}<br> FGTS (11%) : R$${fgts.toFixed(2)}<br> Total de descontos : R$${descontos.toFixed(2)}<br> salário liquido : R$${salario__liquido.toFixed(2)}</p>`
  } else if (salario__bruto <= 1500.00) {
      let ir = salario__bruto * (5 / 100)
      let descontos = ir + inss
      let salario__liquido = salario__bruto - descontos
      resp.innerHTML += `<p>(-) IR (5%) : R$${ir}<br> (-) INSS (10%) : R$${inss.toFixed(2)}<br> FGTS (11%) : R$${fgts.toFixed(2)}<br> Total de descontos : R$${descontos.toFixed(2)}<br> salário liquido : R$${salario__liquido.toFixed(2)}</p>`
  } else if (salario__bruto <= 2500.00) {
      let ir = salario__bruto * (10 / 100)
      let descontos = ir + inss
      let salario__liquido = salario__bruto - descontos
      resp.innerHTML += `<p>(-) IR (10%) : R$${ir}<br> (-) INSS (10%) : R$${inss.toFixed(2)}<br> FGTS (11%) : R$${fgts.toFixed(2)}<br> Total de descontos : R$${descontos.toFixed(2)}<br> salário liquido : R$${salario__liquido.toFixed(2)}</p>`
  }  else if (salario__bruto > 2500.00) {
      let ir = salario__bruto * (20 / 100)
      let descontos = ir + inss
      let salario__liquido = salario__bruto - descontos
      resp.innerHTML += `<p>(-) IR (20%) : R$${ir}<br> (-) INSS (10%) : R$${inss.toFixed(2)}<br> FGTS (11%) : R$${fgts.toFixed(2)}<br> Total de descontos : R$${descontos.toFixed(2)}<br> salário liquido : R$${salario__liquido.toFixed(2)}</p>`
  }
}