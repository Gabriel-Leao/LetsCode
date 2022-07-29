  // Notas bimestrais
function media() {
  let txt__nota1 = document.getElementById('txt-nota1');
  let txt__nota2 = document.getElementById('txt-nota2');
  let txt__nota3 = document.getElementById('txt-nota3');
  let txt__nota4 = document.getElementById('txt-nota4');
  let res = document.getElementById("resp-notas");
  let nota1 = Number(txt__nota1.value);
  let nota2 = Number(txt__nota2.value);
  let nota3 = Number(txt__nota3.value);
  let nota4 = Number(txt__nota4.value);
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  let media__formatada = media.toFixed(1)
  res.innerText = `A média do aluno é ${media__formatada}`;
}

                // area circulo
function circulo() {
  let raiotxt = document.getElementById("raio-circulo");
  let resp = document.getElementById("resp-circulo");
  let raio = parseFloat(raiotxt.value);
  let area__circulo = Math.PI * Math.pow(raio, 2);
  let area__formatada = area__circulo.toFixed(2)
  resp.innerText = `A área do círculo é de ${area__formatada}`
}

                // Conversor de temperatura
function conversor() {
  let temp__txt = document.getElementById("fahrenheit")
  let resp = document.getElementById("resp-conversor")
  let temp__fahrenheit = parseInt(temp__txt.value)
  let temp__celsius = (temp__fahrenheit - 32) / 1.8
  let temp__formatada = parseInt(temp__celsius)
  resp.innerText = `A temperatura F° ${temp__fahrenheit} convertida para celsius é C° ${temp__formatada}` 
}

                // Área
function area() {
  let base__txt = document.getElementById("sala-base")
  let altura__txt = document.getElementById("sala-altura")
  let resp = document.getElementById("resp-sala-area")
  let base = parseFloat(base__txt.value)
  let altura = parseFloat(altura__txt.value)
  let area = base * altura
  let area__formatada = area.toFixed(2)
  resp.innerText = `A área da sala é de ${area__formatada} M²`
}

                // Perímetro
function perimetro() {
  let base__txt = document.getElementById("sala-base")
  let altura__txt = document.getElementById("sala-altura")
  let resp = document.getElementById("resp-sala-perimetro")
  let base = parseFloat(base__txt.value)
  let altura = parseFloat(altura__txt.value)
  let perimetro = 2 * (base + altura)
  let perimetro__formatado = perimetro.toFixed(2)
  resp.innerText = `O perímetro da sala é de ${perimetro__formatado} M²`
}
                //Azulejo
function azulejo() {
  let base__txt = document.getElementById("cozinha-base")
  let altura__txt = document.getElementById("cozinha-altura")
  let resp = document.getElementById("resp-cozinha")
  let base = parseFloat(base__txt.value)
  let altura = parseFloat(altura__txt.value)
  let area = base * altura
  let azulejo = area / 2.5
  resp.innerText = `Será preciso ${Math.ceil(azulejo)} caixas de azulejo para cobrir o chão da cozinha`
}