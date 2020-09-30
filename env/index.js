const env = require('dotenv');

env.config();

const e = process.env;

module.exports = {
  port : e.PORT,
  url  : e.MONGO_URL,
  db   : e.MONGO_DB,
  col  : e.MONGO_COL
}