let nome = "Jose";
let idade = 20;

let resposta;

if(idade < 18){
    resposta = "menor de idade";
}else{
    resposta = "maior de idade";
}

let mensagem = "Nome: " + nome + 
               "\nIdade: " + idade +
               "\nStatus: " + resposta;

console.log(mensagem);