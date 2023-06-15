const { Pool } = require("pg");
import dotenv, { configDotenv } from 'dotenv';

const pool = new Pool({
  user: "postgres",
  password: process.env.DATABASE_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "ProyectoEstadias",
});

module.exports = pool;
