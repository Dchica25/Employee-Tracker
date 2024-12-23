"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Configure your PostgreSQL client connection (use your environment variables or hardcoded values)
const client = new pg_1.Client({
    user: process.env.DB_USER, // User from .env file
    password: process.env.DB_PASSWORD, // Password from .env file
    host: 'localhost',
    database: process.env.DB_DATABASE, // Database from .env file
    port: 5432
});
const runSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect(); // Connect to the PostgreSQL database
        // Read the SQL script from the file
        const seedSql = fs_1.default.readFileSync(path_1.default.join(__dirname, 'seed.sql'), 'utf8');
        // Execute the SQL script
        yield client.query(seedSql);
        console.log('Database seeded successfully!');
    }
    catch (err) {
        console.error('Error seeding the database:', err);
    }
    finally {
        yield client.end(); // Close the database connection
    }
});
// Run the seed script
runSeed();
