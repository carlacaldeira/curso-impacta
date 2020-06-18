const port = 3200;

const bodyParser = require('body-parser');
const express = require('express');

const server = express();  //novo servidor
const allowCors = require('./cors');

//usamos o bodyParser para interpretar as requisições no formato urlncoded

server.use(bodyParser.urlencoded({extended: true}));

//considera o formato json no corpo da saída
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function () {
    console.log(`Servidor no ar, na porta ${port}`);
});

module.exports = server;