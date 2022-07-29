// Números ímpares
function listar__impar(contador, destino) {
    let c = parseInt(contador.value)
    let d = parseInt(destino.value)
    let lista__impar = []
    let resp = document.getElementById("resp__impar")
    resp.innerText += `\nOs números ímpares entre ${c} e ${d} são:\n`
    while (c < d) {
        if (c % 2 != 0) {
        lista__impar.push(c)
        }
        c ++
    }
    return resp.innerText += ` ${lista__impar}`
}

// Calculadora
function tabuada(numero, final) {
    const multiplicando = parseInt(numero.value)
    const fim = parseInt(final.value)
    let resp = document.getElementById("resp-tabuada")
    resp.innerText += "--------------------\n"
    let valores = []
    for (let inicio = 1; inicio <= fim; inicio++) {
        valores.push(`${multiplicando} X ${inicio} = ${inicio * multiplicando}\n`)
    }
    resp.innerText += valores.join("")
    resp.innerText += "--------------------\n"
}

// Maior e menor número no array
let lista__numeros = []

// Adiciona um número na lista
function adicionar(N) {
    lista__numeros.push(Number(N.value))
    return lista__numeros
}

// Mostra a lista completa
function mostrar__lista() {
    resp = document.getElementById("resp-lista")
    resp.innerText = `Os números na minha lista são: ${lista__numeros}\n`
}

// Mostra o maior núnero na lista
function maior__lista () {
    let maior = Math.max(...lista__numeros)
    resp = document.getElementById("resp-maior-lista")
    resp.innerText = `O maior número digitado foi ${maior}\n`
}

// Mostra o menor número na lista
function menor__lista () {
    let menor = Math.min(...lista__numeros)
    resp = document.getElementById("resp-menor-lista")
    resp.innerText = `O menor número digitado foi ${menor}`
}