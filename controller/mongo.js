const { findOne } = require('mongooo').Find;
const { save } = require('mongooo').Save;
const { set } = require('mongooo').Update;
const { generateRoom } = require('./helper');

const Mongo = require('mongooo').Mongooo;
const mongo = new Mongo();

const sec = require('../env/index');
const { Update } = require('mongooo');

let con;

(async()=>{
  con = await mongo.setup(sec.url,sec.db, sec.col);
})();

const loginHandle = async (req, res) => {
  const data = req.body;
  const ress = await findOne(con, data);

  console.log(ress);


  
}

const signupHandle = async (req, res) => {
  const param = generateRoom(req.body);
  const data = await save(con, param);  

  res.send({res:data}).status(200);              
}

const updateProfile = async (req, res) => {
  const {find, update} = req.body;
  console.log(find);
  console.log(update);
  const data = await set(con, find, update);

  console.log(data);
  res.send({res:data}).status(200);
}

module.exports = {loginHandle, signupHandle, updateProfile};
