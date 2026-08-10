const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textcontent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');
botoes{0}.onlick = diminuiTamanho;
botoes{1}. onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
    tamanhoSenha = tamanhoSenha-1;     
    }
    numeroSenha.textcontent = tamanhoSenha
}

function aumentaTamanho(){
    if (tamanhoSenha < 20) {
    tamanhoSenha = tamanhoSenha+1;   
    }
  numeroSenha.textcontent = tamanhoSenha;
}
console.log(botoes);