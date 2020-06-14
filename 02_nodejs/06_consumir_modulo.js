let mod = require('./05_arrays_objetos');

let lista = mod.litaNomes();
let empresa = mod.buscarEmpresa();

console.log(mod.litaNomes); //mostra referência à função
console.log(lista);         //mostra o retorno da função
console.log(mod.diasSemana); //mosta a lista de contantes exportada
console.log(empresa);

//console.log(numeros);

//console.log(endereco);
//console.log(funcionario);
