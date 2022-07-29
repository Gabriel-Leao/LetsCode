console.log("=== MODULE PATTERN ===")

let app = "EXTERNAL";

// Sem o ponto e vírgula, antes da expressão da função, o código não funciona.
// Expressão de função imediata
const MODULE = (function () {
    // let app = "INTERNAL"
    // closure, pega o elemento que está em um escopo externo, caso não haja essa variavel no escopo local
    console.log(app)

    let codeLytics = { count: 0}

    codeLytics.addCount = function () {
        return ++codeLytics.count
    }

    codeLytics.clearCount = function () {
        return codeLytics.count = 0
    }

    codeLytics.getCount = function () {
        return codeLytics.count
    }

    console.log(codeLytics)

    // (Reaveling) Module Pattern. Retorna um novo objeto com essas prop, as outras não podem ser acessadas fora do escopo. Serve para controlar a exibição
    // Criando uma API
    return {
        add: codeLytics.addCount,
        reset: codeLytics.clearCount,
        get: codeLytics.getCount
    }
})() // Esses dois "()" chamam e executam a função anônima

console.log(MODULE)
console.log(MODULE.add())
console.log(MODULE.add())
console.log(MODULE.reset())