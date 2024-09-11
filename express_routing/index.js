const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const todosRouter = require('./routes/todos');

app.use(express.json());

// Routes for Users and Todos
app.use('/users', usersRouter);
app.use('/todos', todosRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
