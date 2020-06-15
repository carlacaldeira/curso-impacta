let data = new Date();
let ano = data.getFullYear();

let meses = [
    {mes: "Janeiro", dias: 31},
    {mes: "Fevereiro", dias: ano % 4 == 0 ? 29 : 28}, //estritamente igual
    {mes: "Março", dias: 31},
    {mes: "Abril", dias: 30},
    {mes: "Maio", dias: 31},
    {mes: "Junho", dias: 30},
    {mes: "Julho", dias: 31},
    {mes: "Agosto", dias: 31},
    {mes: "Setembro", dias: 30},
    {mes: "Outubro", dias: 31},
    {mes: "Novembro", dias: 30},
    {mes: "Dezembro", dias: 31}
];

let lista =  document.getElementById('meses'); //referencia ao elemento <select>

let listarMeses = function () {
    for (let i = 0; i < meses.length; i++) {
        let option = document.createElement('option');
        option.textContent = meses[i].mes;
        option.setAttribute('value', i);
        lista.appendChild(option);
    }
};

listarMeses();

let calcularDias = function(dia, mes){
        
    //calcular quantos dias restam para terminar o mes em questão

    //verificando se o dia é adequado para o mês selecionado

    if (dia < 1 || dia > meses[mes].dias) {
        throw TypeError("Dia inválido para o mês selecionado");
    }
    let diasRestantes = meses[mes].dias - dia;

    for (let i = mes + 1 ; i < meses.length; i++) {
        
        diasRestantes = diasRestantes + meses[i].dias;
    }
    return diasRestantes;
}

document.getElementById('calculardias').addEventListener('click', function(){
    //tratamento de erro 
    try {
        
        let dia = parseInt(document.getElementById('dia').value);
        let mes = parseInt(document.getElementById('meses').value);
        
        document.getElementById('resposta').innerHTML = "Restam " +calcularDias(dia, mes) + "dias" ;

    } catch (e) {
        
        //window.alert('Ocorreu o seguinte erro: ' + e);
        document.getElementById('resposta').innerHTML = "Error: " +e ;
    }
  
});
