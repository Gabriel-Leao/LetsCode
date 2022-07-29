const fs = require('fs')

const file = new Promise((resolve, reject) => fs.readFile('./text.txt', (err, data) => {
  if (err) {
    reject(err)
  } else {
    resolve(data.toString())
  }
})).then((data) => console.log(data)).catch((err) => console.log(err))

console.log(file)

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)

const timeout = new Promise((resolve, reject) => setTimeout(() => {
  console.log("Tempo")
  resolve("Vai corinthians!")
}, 3000)).then(msg => console.log(msg))
console.log(timeout)

const readFileAsync = async () => {
  const teste = await fs.readFile('./text.txt', () => {})
  console.log(teste)
}

readFileAsync()