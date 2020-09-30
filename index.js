const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();

app.use(express.json());
app.use(cors());

app.all("*", (req, res)=>{res.status(304).send({res:"Fuck you!!"})});

const server = http.createServer(app);
server.listen(7777);