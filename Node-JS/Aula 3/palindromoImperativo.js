// Funções imperativas são aquelas que mostram como é feito

const word = 'subi no onibus'

function IsPalindrome(word) {
  let invertedWord = ''

  for (let i = word.length -1 ; i >= 0 ; i--) {
    invertedWord += word[i]
  }
  if (invertedWord === word) {
    return true
  }
    return false
}

console.log(IsPalindrome(word))