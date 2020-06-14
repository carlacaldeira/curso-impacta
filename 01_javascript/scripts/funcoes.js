 function calcular(){
          
    let funcionario = document.getElementById("nomeFuncionario").value;
    
    
    let salario = parseFloat(document.getElementById("salario").value);
    
    let imposto = salario * 15 /100;
   
    let mensagem = 'Nome = ' +funcionario +
                  '<br/>Salario = ' +salario +
                 '<br/>Imposto = ' +imposto +
                 '<br/>Salário Liquido = ' +(salario - imposto);

    document.getElementById("resposta").innerHTML =  mensagem;

}

function CalcularSoma(){
    //valor primeiro campo de entrada
    let v1 = parseFloat(document.getElementById("valor1").value);

    //valor segundo campo de entrada
    let v2 = parseFloat(document.getElementById("valor2").value);

    //calcular a soma e armazená-la em uma variável
    let soma = v1 + v2;
    //apresentar o valor da soma
    //forma 1 - console
    console.log('Soma = ' + soma);

    //forma2 - alert
    window.alert('Soma = ' +soma);

    //forma3 -
    document.getElementById("resposta").innerHTML = 'Soma = ' +soma;
}
