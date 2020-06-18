
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
            document.getElementById("logradouro").value = resposta.logradouro;
            document.getElementById("localidade").value = resposta.localidade;
            document.getElementById('bairro').value = resposta.bairro;
            document.getElementById('uf').value = resposta.uf;
            document.getElementById('cep').value = resposta.cep;
            enderecos.push(resposta);
        });
    console.log(resposta);

});

document.getElementById('mostrarDados').addEventListener('click',function(){
    let opcoes = document.getElementsByName('pesquisa');
    let busca = document.getElementById('busca').value;

    let resposta = [];
    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            let opcao = opcoes[i].value;

            switch(opcao){
                case 'cidade':
                    resposta = enderecos.filter(s => s.localidade.indexOf(busca));
                    break;
                case 'bairro':
                    resposta = enderecos.filter(s => s.bairro.indexOf(busca));
                    break;
                case 'uf':
                    resposta = enderecos.filter(s => s.uf.indexOf(busca));
                    break;
                case 'cep':
                    resposta = enderecos.filter(s => s.cep.indexOf(busca));
                    break;
             
            }
            
        }
        
    }
    resposta.innerHTML = resposta;
});