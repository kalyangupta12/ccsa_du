const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const client = require('./db'); // Import the client from db.js
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Server running on NeonDB!');
});

app.get('/api', async (req, res) => {
  res.send('API working on NeonDB!');
});

// GET endpoint to fetch all notifications
app.get('/api/notific', async (req, res) => {
  const query = 'SELECT * FROM notifications;'; // Corrected SQL query
  try {
    const result = await client.query(query);
    res.status(200).json({ notifications: result.rows });
  } catch (err) {
    console.error('Error getting notifications:', err.message);
    res.status(500).json({ message: 'Error getting notifications' });
  }
});

// POST endpoint to insert a new notification
app.post('/api/notific', async (req, res) => {
  const { title, message, link } = req.body;

  // Ensure required fields are provided
  if (!title || !message) {
    return res.status(400).json({ error: 'Title and message are required' });
  }

  // SQL query to insert the notification
  const query = `
    INSERT INTO notifications (title, message, link)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  try {
    // Execute the query using parameters to avoid SQL injection
    const result = await client.query(query, [title, message, link]);

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
