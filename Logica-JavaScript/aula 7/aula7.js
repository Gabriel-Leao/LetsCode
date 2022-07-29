console.log(this)
console.log(innerHeight)
console.log(document)

const gabriel = {
    nome: "Gabriel Leão da Silva",
    altura: 178,
    peso: 80,
    idade: 18
}

const somar = function(n1, n2) {return n1 + n2}
// O Bind por sua vez retorna uma nova função. O seu primeiro parâmetro continua recebe o valor que será atribuído ao this e os demais argumentos serão os parâmetros que definirão os valores atribuídos da primeira função. no caso null é igual ao this e 1 igual ao primeiro parãmetro enquanto o outro valor não foi defenido
const somar1 = somar.bind(null, 1)

console.log(somar(4, 5))
// realizara a somar 1 + 4, 0 5 será ignorado. O 4 é o n1, e o 1 n2
console.log(somar1(4, 5))

function func1(param1, param2) {
    console.log(param1, param2)
}

const func2 = func1.bind(null, 'param1Fixo')
func2('param2')

// O método call é uma função capaz de alterar o valor this. Por padrão, o primeiro parâmetro que recebe é o valor do this e o demais parâmetros são da função que invoca o método Call
const resultCall = somar1.call(null, 4, 5);
console.log(resultCall);
// O Apply funciona exatamente como o método Call, porém seu segundo parâmetro recebe um Array dos parâmetros da função, enquanto o primeiro parâmetro continua recebendo o valor que será atribuído ao this.
const params = [4, 5];
const resultApply = somar1.apply(null, params);
console.log(resultApply);