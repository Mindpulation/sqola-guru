const env = require('dotenv');

env.config();

const e = process.env;

module.exports = {
  port : e.PORT
}