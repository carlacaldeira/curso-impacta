//usaremos uma classe do Javascript chamada Promise
//Ao criarmos um objeto Promise, devemos passar uma função
//callback com dois parametros: cada parametro também é uma função callback

let promise = new Promise((resolve, reject) => {
    //geramos um numero aleatório
    let x = Math.random();

    //Neste exemplo, valores gerados a partir de 0.5 são aceitoa (favoraveis)
    //Caso contrario os valores são rejeitados (desfavoráveis)

    if (x >= 0.5) {
        resolve('Valor aceitos: ' + x);
    }else{
        reject('Valor inválido(desfavorável): ' + x);
    }

});

//execução

let texto = 'antes';

promise
    .then(p => {
        texto = 'durante';
        return '1º then ->' + p.toUpperCase();
    })
    .then( x=> {
        texto = 'depois';
        console.log('2º then -> :' + x);
    })
    .catch(console.error);

    console.log(texto);