const { findOne, findPage } = require('mongooo').Find;
const { generateRoom } = require('./helper');
const { set } = require('mongooo').Update;
const { save } = require('mongooo').Save;

const Mongo = require('mongooo').Mongooo;
const mongo = new Mongo();

const sec = require('../env/index');

let con;

(async()=>{
  con = await mongo.setup(sec.url,sec.db, sec.col);
})();

const loginHandle = async (req, res) => {
  const ress = await findOne(con, req.body;  
  (ress === null) ? res.send(false) : res.send(ress);
}

const signupHandle = async (req, res) => {
  const param = generateRoom(req.body);
  const data = await save(con, param);  
  res.send(data);              
}

const findProfile = async (req, res) => {
  const { find, field } = req.body;
  const ress = await findOne(find, field);
  (ress === null) ? res.send(false) : res.send(ress);
}

const findAll = async () => {
  const { find, field, page, count} = req.body;
  const ress = await findPage(con, page, count, find, field);
  (ress === null) ? res.send(false) : res.send(ress);
}

const updateProfile = async (req, res) => {
  const {find, update} = req.body;
  const data = await set(con, find, update);
  res.send(data);
}

module.exports = {loginHandle, signupHandle, updateProfile, findProfile, findAll};
