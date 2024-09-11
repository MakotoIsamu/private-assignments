const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Custom validation middleware
const validateRequestBody = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  // Validation checks
  if (typeof ID !== 'number' || typeof Name !== 'string' || typeof Rating !== 'number' || typeof Description !== 'string' || !Array.isArray(Cast) || !Cast.every(item => typeof item === 'string')) {
    return res.status(400).send('Bad request. Some data is incorrect.');
  }
  
  // All checks passed
  next();
};

// Route that uses the custom middleware
app.post('/todo', validateRequestBody, (req, res) => {
  res.status(200).send('Data received');
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send('An error occurred.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
