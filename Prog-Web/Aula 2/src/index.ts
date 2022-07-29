import express, { response } from 'express'
import { v4 } from 'uuid'

const server = express()
server.use(express.json())

server.get('/', (request, response) => {
  return response.send({message: 'Pega mossa'})
})

interface IUsers {
  id: String,
  name: String,
  email: String,
  password: String
}

let users:IUsers[] = []

server.get('/users', (request, response) => {
  return response.send(users)
})

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
  return response.send({ user })
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

  return response.send(user)
})

server.delete('/users/:id', (request, response) => {
  const { id } = request.params
  users = users.filter(x => x.id !== id)
  return response.send(users)
})

server.get('/users/:id', (request, response) => {
  const { id } = request.params
  const user = users.find(x => x.id === id)
  return response.send({user})
})

server.listen(3333, () => console.log('Escutando mais que o beethoven'))