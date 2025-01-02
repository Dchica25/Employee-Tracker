import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  database: process.env.DB_DATABASE,
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Database connection error:', err));
