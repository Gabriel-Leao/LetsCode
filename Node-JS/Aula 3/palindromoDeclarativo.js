// Funções declarativas são aquelas que mostram o que é feito

const word = 'arara'

const IsPalindrome = (word) => word.split('').reverse().join('') === word? true: false

console.log(IsPalindrome(word))