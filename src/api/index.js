const express = require('express');
const client = require('./db'); // Import the client from db.js
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// POST endpoint to insert a new notification
app.post('/', async (req, res) => {
  const { title, message, expiresAt } = req.body;

  // Ensure required fields are provided
  if (!title || !message) {
    return res.status(400).json({ error: 'Title, message, and userId are required' });
  }

  // SQL query to insert the notification
  const query = `
    INSERT INTO notifications (title, message, expires_at)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  try {
    // Execute the query using parameters to avoid SQL injection
    const result = await client.query(query, [title, message, expiresAt]);
    
    // Respond with the newly inserted notification
    res.status(201).json({ notification: result.rows[0] });
  } catch (err) {
    console.error('Error inserting notification:', err.message);
    res.status(500).json({ error: 'Failed to insert notification' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
