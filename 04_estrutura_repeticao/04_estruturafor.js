let cursos = [
            {'nome':'DevOps', 'ch':40, 'disponivel': false}, 
            {'nome':'Matemética', 'ch':120, 'disponivel': true}, 
            {'nome':'Estatistica', 'ch':80, 'disponivel': true}, 
            {'nome':'PHP', 'ch':40, 'disponivel': false}, 
            {'nome':'Scrum', 'ch':32, 'disponivel': true} 
];

console.log('Lista de cursos disponiveis: ' )
for (let i = 0; i < cursos.length; i++) {
    if (cursos[i].disponivel) {
        console.log(cursos[i].nome); 
    } 
}
