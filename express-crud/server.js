const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to read todos from the db.json file
const getTodos = () => {
  const data = fs.readFileSync('db.json');
  return JSON.parse(data).todos;
};

// Function to save todos to the db.json file
const saveTodos = (todos) => {
  fs.writeFileSync('db.json', JSON.stringify({ todos }, null, 2));
};

// GET all todos
app.get('/todos', (req, res) => {
  const todos = getTodos();
  res.json(todos);
});

// POST a new todo
app.post('/todos', (req, res) => {
  const todos = getTodos();
  const newTodo = req.body;
  todos.push(newTodo);
  saveTodos(todos);
  res.status(201).json(newTodo);
});

// PUT to update todos with even ID status from false to true
app.put('/todos/even', (req, res) => {
  let todos = getTodos();
  todos = todos.map(todo => {
    if (todo.id % 2 === 0 && todo.status === false) {
      todo.status = true;
    }
    return todo;
  });
  saveTodos(todos);
  res.json(todos);
});

// DELETE todos with status true
app.delete('/todos/true', (req, res) => {
  let todos = getTodos();
  todos = todos.filter(todo => !todo.status);
  saveTodos(todos);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
