let express = require('express');
let load = require('express-load');
let mongoose = require('mongoose');

let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

global.db = mongoose.connect('mongodb://localhost:27017/dbcursos');

load('models').into(app);

let Curso = app.models.cursos;

//métodos expostos como serviço


//HTTP GET
app.get('/', function (request, response) {
  response.send('Servidor em funcionamento');
});

app.get('/cursos', function (resquest, response) {
  //se algum erro acontecer, o parametro erro na funcção callback abaixo
  //o receberá. Caso contrário, o parametro erro será nulo.
  Curso.find(function (erro, todosCursos) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(todosCursos);
    }

  });
});

app.get('/cursos/:id' , function (request, response) {
  //localhost:3300/cursos/123
  let id = request.params.id;

  Curso.findById(id, function (erro, curso) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(curso);
    }
  });
});

//HTTP POST

app.post('/cursos', function (request, response) {
  let codigo = request.body.codigo;
  let descricao = request.body.descricao;
  let cargaHoraria = request.body.cargaHoraria;

  let item = {
    'codigo': codigo,
    'descricao': descricao,
    'cargaHoraria': cargaHoraria
  };

Curso.create(item, function (erro, curso) {
  if (erro) {
    response.json(erro);
  } else {
    response.json(curso);
  }
  })
});

//HTTP PUT
app.put('/cursos/:id', function(request, response){
  let id = request.params.id;

  Curso.findById(id, function(erro, curso){
    if (erro) {
      response.json(erro);
    } else {
      curso.codigo = request.body.codigo;
      curso.descricao = request.body.descricao;
      curso.cargaHoraria = request.body.cargaHoraria;

      curso.save(function(erro, curso_atual){
        if (erro) {
          response.json(erro);
        } else {
          response.json(curso_atual);
        }
      })
    }
  })
});

//HTTP DELETE
app.delete('./cursos/:id', function(request, response){
  let id = request.params.id;

  Curso.findById(id, function(erro, curso){
    if (erro) {
      response.json(erro);
    } else {
      Curso.remove(curso, function(erro, curso){
        response.send('Curso Removido');
      });
    }
  });
});

app.listen(3300, function(){
  console.log('Webservice em execução');

});