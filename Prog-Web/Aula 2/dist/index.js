"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.get('/', (request, response) => {
    return response.send({ message: 'Pega mossa' });
});
let users = [];
server.get('/users', (request, response) => {
    return response.send(users);
});
server.post('/users', (request, response) => {
    const { name, email, password } = request.body;
    const id = (0, uuid_1.v4)();
    const user = {
        id,
        name,
        email,
        password
    };
    users.push(user);
    return response.send({ user });
});
server.put('/users/:id', (request, response) => {
    const { id } = request.params;
    const { name, email, password } = request.body;
    const userIndex = users.findIndex(x => x.id === id);
    const user = {
        id,
        name,
        email,
        password
    };
    users[userIndex] = user;
    return response.send(user);
});
server.delete('/users/:id', (request, response) => {
    const { id } = request.params;
    users = users.filter(x => x.id !== id);
    return response.send(users);
});
server.get('/users/:id', (request, response) => {
    const { id } = request.params;
    const user = users.find(x => x.id === id);
    return response.send({ user });
});
server.listen(3333, () => console.log('Escutando mais que o beethoven'));
