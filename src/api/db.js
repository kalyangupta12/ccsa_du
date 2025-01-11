const { Client } = require('pg');

// Connection URL provided by Neon DB
const connectionString = 'postgresql://ccsa_du_owner:1syLFa5wcDfS@ep-silent-heart-a5ecbgsn.us-east-2.aws.neon.tech/ccsa_du?sslmode=require';

// Create a new client instance using the connection URL
const client = new Client({
  connectionString: connectionString,
});

// Function to check and create the table if it doesn't exist
const createNotificationTableIfNotExists = async () => {
  try {
    // Query to check if the table exists
    const checkTableQuery = `
      SELECT to_regclass('public.notifications');
    `;

    const result = await client.query(checkTableQuery);

    if (result.rows[0].to_regclass === null) {
      // Table doesn't exist, so create it
      const createTableQuery = `
        CREATE TABLE notifications (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          message TEXT NOT NULL,
          expires_at TIMESTAMPTZ,
          created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
      `;
      
      await client.query(createTableQuery);
      console.log('Table "notifications" created.');
    } else {
      console.log('Table "notifications" already exists.');
    }
  } catch (err) {
    console.error('Error checking or creating table:', err.message);
  }
};

// Connect to the database
client.connect()
  .then(async () => {
    console.log('Connected to the Neon database');
    await createNotificationTableIfNotExists(); // Check and create the table if needed
  })
  .catch((err) => {
    console.error('Connection error:', err.message);
  });

// Export the client to use in other files
module.exports = client;
