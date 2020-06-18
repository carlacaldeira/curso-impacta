const Produtos = require('./produtos');

Produtos.methods(['get', 'post', 'put', 'delete']);
Produtos.updateOptions({new:true, runValidarors: true});

module.exports = Produtos;