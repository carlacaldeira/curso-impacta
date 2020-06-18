module.exports = function (request, response, next) {
    response.header("Access-Control-Allow_Origin", "*");
    response.header("Acess-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.header("Access-Control-Allow-Headers", "origin, X-Request-With, Content-Type, Accept");
    next(); //necessário para dar continuidade ao processo de requisição
}