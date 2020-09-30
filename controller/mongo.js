const { findOne } = require('mongooo').Find;

const Mongo = require('mongooo').Mongooo;
const mongo = new Mongo();

const sec = require('../env/index');

let con;

(async()=>{
  con = await mongo.setup(sec.url,sec.db, sec.col);
})();

const loginHandle = async (req, res) => {
  const ress = await findOne(con, req.body);
  res.send(ress);
}

module.exports = {loginHandle};
