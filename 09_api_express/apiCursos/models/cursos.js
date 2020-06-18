module.exports = function (app) {
    //interface com o banco de dados
    let mongoose = require('mongoose');

    let Schema = mongoose.Schema;

    var curso = Schema({
        codigo: { type: Number, required: true },
        descricao: {  type: String, required: true },
        cargaHoraria: { type: Number }
    });

    return mongoose.model('cursos', curso);
}