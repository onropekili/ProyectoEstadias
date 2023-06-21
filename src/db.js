const { Pool } = require("pg");
import dotenv, { configDotenv } from 'dotenv';

const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  database: "ProyectoEstadias",
});

module.exports = pool;
