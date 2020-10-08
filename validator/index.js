
const { login, signup, updateProfile } = require('./schema');

const loginList = (req, res, next) => {    
  const {value,error} = login.validate(req.body)  
  if(error === undefined){next();}
  else{res.send({res:"Salah Format"}).status(304);}
}

const signupList = (req,res,next) => {
  const {value, error} = signup.validate(req.body);
  (error === undefined) ? next() : res.send({res:"Salah Format"}).status(304);
}

const updateProfileList = (req,res,next) => {
  const {value, error} = updateProfile.validate(req.body);
  (error === undefined) ? next() : res.send({res:"Salah Format"}).status(304);
}

module.exports = {loginList, signupList, updateProfileList};