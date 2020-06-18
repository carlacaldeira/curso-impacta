let express = require('express');
let load = require('express-load');
let mongoose = require('mongoose');

let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.db = mongoose.connect('mongodb://localhost:27017/dbcontatos');

load('models').into(app);

let Contato = app.models.contatos;

//métodos expostos como serviço


//HTTP GET
app.get('/', function (request, response) {
  response.send('Servidor em funcionamento');
});

app.get('/contatos', function (resquest, response) {
  //se algum erro acontecer, o parametro erro na funcção callback abaixo
  //o receberá. Caso contrário, o parametro erro será nulo.
  Contato.find(function (erro, todosContatos) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(todosContatos);
    }

  });
});

app.get('/contatos/:id' , function (request, response) {
  //localhost:3200/contatos/123
  let id = request.params.id;

  Contato.findById(id, function (erro, contato) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(contato);
    }
  });
});

//HTTP POST
app.post('/contatos', function (request, response) {
  let nome = request.body.nome;
  let idade = request.body.idade;
  let telefone = request.body.telefone;

  let item = {
    'nome': nome,
    'idade': idade,
    'telefone': telefone
  };

Contato.create(item, function (erro, contato) {
  if (erro) {
    response.json(erro);
  } else {
    response.json(contato);
  }
  })
});

//HTTP PUT
app.put('/contatos/:id', function(request, response){
  let id = request.params.id;

  Contato.findById(id, function(erro, contato){
    if (erro) {
      response.json(erro);
    } else {
      contato.nome = request.body.nome;
      contato.idade = request.body.nome;
      contato.telefone = request.body.telefone;

      contato.save(function(eroo, contato_atual){
        if (erro) {
          response.json(erro);
        } else {
          response.json(contato_atual);
        }
      })
    }
  })
});

//HTTP DELETE
app.delete('./contatos/:id', function(request, response){
  let id = request.params.id;

  Contato.findById(id, function(erro, contato){
    if (erro) {
      response.json(erro);
    } else {
      Contato.remove(contato, function(erro, contato){
        response.send('Contato Removido');
      });
    }
  });
});

app.listen(3200, function () {
  console.log('Webservice em execução');

});