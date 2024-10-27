// server.js
const express = require('express');
const pool = require('./db'); // Import the PostgreSQL pool configuration

const app = express();
const PORT = 3000;

// Test route to get data from a table in the database
app.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table_name'); // Replace with your actual table name
    res.json(result.rows); // Send the result as JSON
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Database error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
