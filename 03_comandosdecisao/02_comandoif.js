/*
    Uma empresa desconta 6% de vale transporte sobre o salário de um fuincionário, somente se este valor
    dor menor que o valor gasto com o transporte. O programa a seguir deve apresentar, com base no salário,
    o valor descontado com vale transporte
*/

let salario = 1000.0;
let transporte = 150.0;
let vt = salario * 0.06;
if(vt > transporte){
    vt = transporte;
}
