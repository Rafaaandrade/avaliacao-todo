const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors())
server.use(express.json());

const todos = []


server.get('/todos', (req, res) => {
    return res.json(todos);
})

server.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    return res.json(todos[id]);
})


server.post('/todos', (req, res) => {
    const obj = req.body;
    todos.push(obj);

    return res.json(todos);
})

server.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const newData = {...req.body, id};

    for (let i = 0; i < todos.length; i++) {
        if (Number(todos[i].id) === Number(id)) {
            todos[i] = newData;
        }
    }

    return res.json(todos);

})

server.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todos.splice(id, 1);
    return res.json(todos);
})

server.listen(3001);