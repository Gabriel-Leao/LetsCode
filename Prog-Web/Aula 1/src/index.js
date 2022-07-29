import express, { response } from 'express'
import { v4 } from 'uuid'

const server = express()
server.use(express.json())

server.get('/', (request, response) => {
  response.send({message: 'Pega mossa'})
})

let users = []

server.get('/users', (request, response) => {
  response.send(users)
})

// Route params: quando quisermos acessar algo especifico
// Query params: multiplos parâmetros (ex: filtros)
// Request body: Não é GET, envia informações variadas

server.post('/users', (request, response) => {
  const { name, email, password }  = request.body
  
  const id = v4()
  const user = {
    id,
    name,
    email,
    password
  }

  users.push(user)
  response.send({ user })
})

server.put('/users/:id', (request, response) => {
  const { id } = request.params
  const { name, email, password }  = request.body

  const userIndex = users.findIndex(x => x.id === id)
  const user = {
    id,
    name,
    email,
    password
  }
  users[userIndex] = user

  response.send(user)
})

server.delete('/users/:id', (request, response) => {
  const { id } = request.params
  users = users.filter(x => x.id !== id)
  response.send(users)
})

server.get('/users/:id', (request, response) => {
  const { id } = request.params
  const user = users.find(x => x.id === id)
  response.send({})
})

server.listen(3333, () => console.log('Escutando mais que o beethoven'))