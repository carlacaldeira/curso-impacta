//neste programa, estudaremos o comportamento e o tipo esperado dos paramentros das funções
//parâmetro de fuções: informação (valor) complementar para que a função seja executada.

function executarSoma(v1, v2){ //tipo esperado: numerico para os dois paramentros
    let soma = v1 + v2;
    return soma;
}

function mostrarTamanho(s){ //tipo esperado: texto(string) ou array(vetor)
    return s.length;
}

function executar(operacao){
    return operacao(2,3);
}

console.log ('função exeurtarSoma: ' + executarSoma(20,35));
console.log ('função mostrarTamanho: ' + mostrarTamanho('Curso Angular e Node Capgemini'));
console.log ('função operacao: ' + operacao());