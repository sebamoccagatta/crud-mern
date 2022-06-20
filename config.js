// config.js
const dotenv = require('dotenv');
dotenv.config();
const config = {
  PORT: process.env.PORT || 5000,
  DB_CONECT: process.env.DB_CONECT || '' 
}

module.exports = config;