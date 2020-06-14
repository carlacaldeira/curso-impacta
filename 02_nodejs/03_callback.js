//função principal
function executar(operacao){
    return operacao(2,3);
}

//executando a função principal (executar) com funções callback passadas como parâmetro
let valor1 = executar(function(x,y){
    return x + y;
});

let valor2 = executar(function(x,y){
    return x * y;
});

let valor3 = executar(function(x,y){
    return "Valores informados: " +x+"e" +y;
});

let valor4 = executar(function(x,y){
    return x > y;
});
console.log('valor1 = ' + valor1);
console.log('valor2 = ' + valor2);
console.log('valor3 = ' + valor3);
console.log('valor4 = ' + valor4);