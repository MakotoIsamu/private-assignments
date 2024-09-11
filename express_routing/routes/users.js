const express = require('express');
const router = express.Router();

// Mock data
let users = [];

// Create a new user
router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
});

// Get all users
router.get('/', (req, res) => {
    res.send(users);
});

// Update a user by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }
    
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.send(users[userIndex]);
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== parseInt(id));
    res.send(`User with ID ${id} deleted`);
});

module.exports = router;
