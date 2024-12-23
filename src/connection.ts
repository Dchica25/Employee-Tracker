// src/db.ts
import { Client } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const client = new Client({
  user: process.env.DB_USER,       // User from .env file
  password: process.env.DB_PASSWORD, // Password from .env file
  host:'localhost',
  database: process.env.DB_DATABASE, // Database from .env file
  port: 5432
});

client.connect()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Connection error', err.stack));

export { client };
