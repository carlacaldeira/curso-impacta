module.exports = function (app) {
    //interface com o banco de dados
    let mongoose = require('mongoose');

    let Schema = mongoose.Schema;

    var contato = Schema({
        nome: { type: String, required: true },
        idade: { type: Number },
        telefone: { type: String }
    });

    return mongoose.model('contatos', contato);
}