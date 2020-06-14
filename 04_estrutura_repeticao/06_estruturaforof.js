let cursos = [
    {'nome':'DevOps', 'ch':40, 'disponivel': false}, 
    {'nome':'Matemética', 'ch':120, 'disponivel': true}, 
    {'nome':'Estatistica', 'ch':80, 'disponivel': true}, 
    {'nome':'PHP', 'ch':40, 'disponivel': false}, 
    {'nome':'Scrum', 'ch':32, 'disponivel': true} 
];

console.log('Lista de cursos disponiveis: ' );

for (const item of cursos) {  //estrutura posicional: item -> elemento da coleção; cursos -> coleção
    console.log(item.nome);
    console.log(item.ch);
}
