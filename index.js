const express = require('express');
const sec = require('./env/index');
const cors = require('cors');
const http = require('http');

const update = require('./view/update');
const auth = require('./view/auth');
const find = require('./view/find');

const app = express();

app.use("/api/profile/", update);
app.put('/api/profile', find);
app.use("/api/auth/", auth);
app.use(express.json());
app.use(cors());

app.all( "*", (req, res)=>{res.send({res:"Fuck you!!"});} );

const server = http.createServer(app);
server.listen(sec.port);