console.log("=== OBJETO WINDOW ===")

var nome = "Leão"

console.log(this)
// quando a variavel é criada com o var, ela fica amarrada no objeto global, igual as funções.
console.log(nome, window.nome)
console.log(meuCurso(), window.meuCurso())

function meuCurso () {
    return "Web 836 - Let's Code!"
}
