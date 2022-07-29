const soma = (a, b) => a + b
const subtrair = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => b > 0 ? a / b : NaN

// 1 - Uma função que recebe a outra como parâmetro
const calcular = (operacao, a, b) => operacao(a, b)
console.log(calcular(soma, 2, 4))

// 2 - Uma função que retorna outra função
const media = (a, b) => {
    // calcular (operacao, a = resultado soma, b = 2)
    return calcular(dividir, soma(a, b), 2)
}

// Recursão

// Implemetação iterativa
function mostra__string(string) {
    for(let char of string)
    console.log(char)
}
mostra__string("Leão")

// Implementação recursiva
function mostra__string_rec(string) {
    if(string == ""){
        return;
    }
    console.log(string[0], string)
    mostra__string_rec(string.substring(1))
}
mostra__string_rec("Gabriel")

function fatorial(n) {
    f = 1
    for (let i = 1; i<=n; i++) {
        f = f * i
    }
    return f
}

function fatorial_rec(n) {
    if (n==1) return 1;
    return n * fatorial(n-1);
}

console.log(fatorial_rec(5))