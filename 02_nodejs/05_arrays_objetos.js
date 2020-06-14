//definindo uma lista (array)
//1- lista de nomes

let nomes = ['Daniel','Maria','Joaquim','Osvaldo','Marlene'];

//2 - lista de números
let numeros = [2, 8, 7, 10, 15, 23];

//3 - dias da semana (lista inalterável) - Quando usa consr os valores não podem mudar
// Normalmente criados em letra maiscula por convenção
const DIAS = ['dom','seg','ter','qua','qui','sex','sab']


// Definindo objetos 
let endereco = {
    'Logradoro': 'Alameda Araguaia',
    'numero' : 1930,
    'cidade': 'Barueri',
    'num_funcionarios' : 5000
};
let funcionario = {
    'nome': 'Joaquim',
    'cargo': 'Analista',
    'idade': 32,
    'endereço': endereco
}
let empresa = {
    'nome': 'Capgemini',
    'endereço': endereco,
    'colaboradores' : nomes
}

//---------------------------------------------------------------------------------------------------------
//somente exportamos os elementos atruibuidos 
exports.litaNomes = function(){
    return nomes;
}

exports.diasSemana = DIAS;

exports.buscarEmpresa = function(){
    return empresa;
}