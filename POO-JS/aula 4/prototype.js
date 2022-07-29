console.log("=== PROTOTYPE ===")

const escola = "Let's Code" // String literal
const school = new String("Let's Code") // string constructor

// objeto.propriedade
// objeto.metodos()

console.log(escola, escola.constructor)
console.log(school, school.constructor)

// Variáveis criadas a partir do mesmo construtor
// Compartilham a mesma API
console.dir(String)
console.dir(String.prototype) // APIString

// Métodos estáticos
console.log(String.fromCharCode(65)) // Letra "A" na tabela ASCII

// metodos comuns (API)
console.log(escola.bold()) // transformação
console.log(escola.anchor()) // transformação
console.log(escola) //string imutável

// Sobrescrever o peototipo  (Prototype)
// Sobrescrever Métodos
String.prototype.bold = function() {
    return `<strong>${this}</strong>`
}
console.log(escola.bold())


// Adicionar oa protótipo
String.prototype.nada = function() {
    return "Retornei foi é nada, kkkkkkkkkkkk"
}
console.dir(String.prototype)
console.log(escola.nada())

// Excluir do prototipo
console.log(escola.blink())
delete String.prototype.blink
console.dir(String.prototype)
console.log(escola.blink())