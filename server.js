const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js Server!');
});

// /about route
app.get('/about', (req, res) => {
  res.send('This is a simple web server built using Express.js.');
});

// /contact route
app.get('/contact', (req, res) => {
  res.json({
    email: 'student@example.com',
    phone: '123-456-7890'
  });
});

// /random route
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(`Random number: ${randomNumber}`);
});

// Default route for undefined paths
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
