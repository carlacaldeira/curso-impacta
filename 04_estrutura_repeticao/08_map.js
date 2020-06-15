let cursos = [
    {'nome':'DevOps', 'ch':40, 'disponivel': false}, 
    {'nome':'Matemética', 'ch':120, 'disponivel': true}, 
    {'nome':'Estatistica', 'ch':80, 'disponivel': true}, 
    {'nome':'PHP', 'ch':40, 'disponivel': false}, 
    {'nome':'Scrum', 'ch':32, 'disponivel': true} 
];

let listaCursos = cursos.map((item, indice) => {
    return indice + " - " +  item.nome;
});

console.log(listaCursos);

//obter uma nova lista a patir de cursos, que mostrem o nome do curso, a carga horária e o texto. "Curso longo"
//apenas se o curso tiver mais que 40 horas

let listaCursoLongo = cursos.map((item, indice) => item.nome + (item.ch > 40 ? '- Curso Longo' : null));
console.log(listaCursoLongo);

