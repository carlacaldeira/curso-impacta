//neste programa, vamos usar o modulo http já disponivel na biblioteca de modulos do node.js

let http = require('http');

//função que representa uma requisição a um servidor, com o conteúdo a ser apresentado

let requisicao = function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Texto a ser exibido no browser</h1>");
    response.end();
}

//função que representará o servidor web
let server = http.createServer(requisicao);

//executar o servidor
let resultado = function(){
    console.log('Servidor em funcionamento')
}

server.listen(3000, resultado);