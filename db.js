// db.js
require('dotenv').config(); // Load environment variables from .env file

const { Pool } = require('pg');

// Set up a new pool using credentials from the .env file
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
  }
  release(); // Release the client back to the pool
});

// Export the pool for use in other parts of the application
module.exports = pool;
