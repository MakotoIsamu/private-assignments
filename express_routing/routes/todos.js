const express = require('express');
const router = express.Router();

// Mock data
let todos = [];

// Create a new todo
router.post('/', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).send(todo);
});

// Get all todos
router.get('/', (req, res) => {
    res.send(todos);
});

// Update a todo by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(t => t.id === parseInt(id));
    
    if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
    }
    
    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    res.send(todos[todoIndex]);
});

// Delete a todo by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== parseInt(id));
    res.send(`Todo with ID ${id} deleted`);
});

module.exports = router;
