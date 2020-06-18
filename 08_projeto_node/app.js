let moment = require('moment');

let data = moment(); //obtém a data atuaç (momento atual)

moment.locale('pt-br');

// data.add(2, "hour");  //adicionamos duas horas à hora atual
// data.add(-1, "year")  //removeremos um ano em relação ao ano do objeto (data.subtract(1, "year"))

console.log(data);
console.log(data.format('DD/MM/YYYY HH:mm'));


console.log(data.date()); //retorna o dia atual
console.log(data.month()); //retorna o mes atual
console.log(data.year()); //retorna o ano atual
console.log(data.hour()); //retorna o hora atual
console.log(data.minute()); //retorna os minuto atual
console.log(data.second()); //retorna os segundos atual


let dataInicioCurso = moment("2020-06-10")
console.log(dataInicioCurso.format('DD/MM/YYYY'));

moment.locale('pt-br');