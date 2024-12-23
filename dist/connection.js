"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// src/db.ts
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const client = new pg_1.Client({
    user: process.env.DB_USER, // User from .env file
    password: process.env.DB_PASSWORD, // Password from .env file
    host: 'localhost',
    database: process.env.DB_DATABASE, // Database from .env file
    port: 5432
});
exports.client = client;
client.connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Connection error', err.stack));
