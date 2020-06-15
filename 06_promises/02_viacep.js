document.getElementById('mostrarEndereco').addEventListener('click', function(){

    let cep = document.getElementById('cep').value;

    let url = `http://viacep.com.br/ws/${cep}/json/`;

    let resposta = {};

    //usaremos a função fetch() para acessar o webservie.
    //Obs: Essa funcção retorna um objeto Promise

    fetch(url)
        .then(res => {
            let x = res.json();
            return x;
        })
        .then(valor => {
            resposta = valor;
            document.getElementById('logradouro').value = resposta.logradouro;
            document.getElementById("localidade").value = resposta.localidade;
        });
    console.log(resposta);

});