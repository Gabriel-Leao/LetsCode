var ano = 1000;
var variavel__maluca;

console.log(ano);

ano = ano + 1;

console.log(ano);

ano = ano * 2;

ano = ano + 1;

console.log(ano);

console.log(64%2);

// Não exite divisão inteira
console.log(82/2);

xp = "Olá \"Mundo\"!";
console.log(xp);

corinthians = 'Vai Corinthians!';
console.log(corinthians);

console.log(xp, "corinthians");
console.log(xp + "corinthians");
console.log(xp + "\ncorinthians");

// Todas as declarações de variáveis são elevadas lá para cima, como uma bolha
var boolean = true;
console.log(boolean);

console.log(variavel__maluca);
variavel__maluca = 'huuuuu';


// Só pode ser usada daqui para baixo, caso contrário 
let pemba__maluca = "Hello";
console.log(pemba__maluca);
// console.log(pemba__maluca); resulta em erro

// const não pode ser alterado
const dia = 25;
console.log(dia);

// dia = 27; resulta em erro

// O recomendado é utilizar let e const, não utilize var se possível

let desconhecido;
console.log(desconhecido);

let nulo = null;
console.log(nulo);

// O JavaScript sempre concatena para string quando tem uma
console.log('10' + 3);
console.log(10 + '3');

// Tranforma a string em int ou float
console.log(10 + parseInt('3.9'));
console.log(parseFloat('10') + 3.21);
console.log(parseInt('10.1') + 3);

// o promp é input e console.log output ou print
let numero__qualquer = parseInt(prompt('Digite um número qualquer: '));
console.log(numero__qualquer)

// Se não utilizar o parseInt a variavel vai ser string
let numero__qualquer1 = prompt('Digite um número qualquer: ');
console.log(numero__qualquer1)