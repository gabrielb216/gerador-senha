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
    numeroSenha.textcontent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20) {
    tamanhoSenha = tamanhoSenha+1;   
    }
  numeroSenha.textcontent = tamanhoSenha;
  geraSenha();
}
constc campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();

function geraSenha(){
let senha ='';
  for (let index = 0; index < tamanhoSenha; index++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.lenght;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha  + (letrasMaiusculas[numeroAleatorio]);
  } 
  campoSenha.value = letrasMaiusculas;
}


c