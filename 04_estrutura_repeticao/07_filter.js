let cursos = [
    {'nome':'DevOps', 'ch':40, 'disponivel': false}, 
    {'nome':'Matemética', 'ch':120, 'disponivel': true}, 
    {'nome':'Estatistica', 'ch':80, 'disponivel': true}, 
    {'nome':'PHP', 'ch':40, 'disponivel': false}, 
    {'nome':'Scrum', 'ch':32, 'disponivel': true} 
];

let cursosDisponiveis = [];
// //filtrando elementos manualmente
// console.log('Lista de cursos disponiveis: ' );
// for (let i = 0; i < cursos.length; i++) {
//     if (cursos[i].disponivel) {
//         cursosDisponiveis.push(cursos[i]);
//     } 
// }

// console.log(cursosDisponiveis);

cursosDisponiveis = cursos.filter(s => s.disponivel == true)
console.log(cursosDisponiveis);

 //outro exemplo: buscando os elementos com carga horaria > 40
let cursoMaior40 = cursos.filter(x => x.ch >40);
console.log(cursoMaior40);

//mais um exemplo: buscando os elementos com descrição contendo a letra 'm' e com mais de 6 caracteres
//&& - operados E lógico

let cursoscomM = cursos.filter( s => s.nome.includes('m') && s.nome.length > 6);
console.log(cursoscomM);


