let estados = [
    {codigo: 1, estado: 'BA'},
    {codigo: 2, estado: 'SP'},
    {codigo: 3, estado: 'PR'},
    {codigo: 4, estado: 'MG'}
];

let cidades = [
    {codigo: 1, codeestado: 2, cidade: 'São Paulo'},
    {codigo: 2, codeestado: 2, cidade: 'Campinas'},
    {codigo: 3, codeestado: 1, cidade: 'Salvador'},
    {codigo: 4, codeestado: 1, cidade: 'utinga'},
    {codigo: 5, codeestado: 3, cidade: 'Curitiba'},
    {codigo: 6, codeestado: 3, cidade: 'Cascavel'},
    {codigo: 7, codeestado: 3, cidade: 'Foz do Iguaçu'},
    {codigo: 8, codeestado: 4, cidade: 'Belo Horizonte'}

];

let selectEstados = document.getElementById('estados');
let listarEstados = function () {
    selectEstados.innerHTML = "<option value = '0'>SELECIONE</option>";
    for (let i = 0; i < estados.length; i++) {
        let option = document.createElement('option');
        option.textContent = estados[i].estados;
        selectEstados.appendChild(option);
    }
}
listarEstados();

//evento de mudança de posição de lemento: 'change'
selectEstados.addEventListener("change", function(){
    let codeestado = selectEstados.nodeValue;
    listacidades = cidades.filter(c => c.codeestado == codeestado);

    selectCidades = document.getElementById('cidades');

    while (selectCidades.firstCild) {
        selectCidades.removeChild(selectCidades.firstCild);
    }

    for (let i = 0; i < listacidades.length; i++) {
        let option = document.createElement('option');
        option.textContent = listacidades[i].cidade;
        option.setAttribute('value', listacidades[i].codigo);
        selectCidades.appendChild(option);        
    }
});