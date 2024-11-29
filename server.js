const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like the HTML frontend

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, eventDetails } = req.body;

  // Simulate processing (e.g., saving to a database or sending an email)
  if (!name || !email || !eventDetails) {
    return res.status(400).send({ error: 'All fields are required.' });
  }

  console.log('Form submitted:', { name, email, eventDetails });

  // Respond with success
  res.status(200).send({ message: 'Form submitted successfully!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
