import { Client } from 'pg';
import fs from 'fs';
import path from 'path';

// Configure your PostgreSQL client connection (use your environment variables or hardcoded values)
const client = new Client({
    user: process.env.DB_USER,       // User from .env file
    password: process.env.DB_PASSWORD, // Password from .env file
    host:'localhost',
    database: process.env.DB_DATABASE, // Database from .env file
    port: 5432
  });

const runSeed = async () => {
  try {
    await client.connect(); // Connect to the PostgreSQL database
    
    // Read the SQL script from the file
    const seedSql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');
    
    // Execute the SQL script
    await client.query(seedSql);
    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    await client.end(); // Close the database connection
  }
};

// Run the seed script
runSeed();
