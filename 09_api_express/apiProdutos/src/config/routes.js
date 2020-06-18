const express = require('express');

module.exports = function (server) {
    
    //definição da URL base para todas as rotas
    const router = express.Router();
    server.use('/ws', router);

    //rotas relacionadas aos Models
    const Produtos = require('../ws/produtos/produtosService');
    Produtos.register(router, '/produtos');
}