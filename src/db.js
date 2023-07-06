const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
  user: process.env.OWNDATABASE_USER,
  password: process.env.OWNDATABASE_PASSWORD,
  host: process.env.OWNDATABASE_HOST,
  port: 5432,
  database: process.env.OWNDATABASE_NAME,
});

const mssqlConfig = {
  server  :   process.env.TESORERIA_DATABASE_SERVER    ,
  database: process.env.TESORERIA_DATABASE_NAME        ,
  user    :     process.env.TESORERIA_DATABASE_USER    ,
  password: process.env.TESORERIA_DATABASE_PASSWORD    ,
  port    :     1433    , // Puerto por defecto para SQL Server
  encrypt : false
}

module.exports = {
  pool,
  mssqlConfig
};
