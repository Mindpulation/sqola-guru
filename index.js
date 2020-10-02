const express = require('express');
const sec = require('./env/index');
const cors = require('cors');
const http = require('http');

const auth = require('./view/auth');
const updateProfile = require('./view/updateProfile');

const app = express();

app.use(express.json());
app.use("/api/auth/", auth);
app.use("/api/profile/", updateProfile);
app.use(cors());

app.all( "*", (req, res)=>{res.send({res:"Fuck you!!"});} );

const server = http.createServer(app);
server.listen(sec.port);