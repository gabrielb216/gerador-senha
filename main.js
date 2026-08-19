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
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox[0]checked);

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinuscula = 'abcdefghijklmnopqrstuvwxyz';
const numero = '01232456789';
const simbolos = '!@#$%*?'
geraSenha();

function geraSenha(){
let senha ='';
if (checkbox[0].checked) {
  alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[1].checked) {
  alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[2].checked) {
  alfabeto = alfabeto + letrasMaiusculas;
}
f (checkbox[3].checked) {
  alfabeto = alfabeto + letrasMaiusculas;
}
  console.log(alfabeto)
  let alfabeto = '';
  for (let index = 0; index < tamanhoSenha; index++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.lenght;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha  + letrasMaiusculas[numeroAleatorio];
  } 
  campoSenha.value = letrasMaiusculas;
}


c