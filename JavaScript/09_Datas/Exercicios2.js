const hoje = new Date();
const diferencaHoras = hoje.getUTCMinutes() /60;
console.log('Diferença de horário: ' + diferencaHoras + ' horas');

var a = 'teste';
a.length

/*-----------------------------------------------*/
console.log("\n");

const plataforma = 'Mobile';
let msg = "";

switch (plataforma) {
  case 'Mobile':
    msg = 'React Native e Flutter';
    break;

  case 'Web':
    msg = 'Angular, React e Vue.js';
     break;

  case 'Back-end':
      msg = 'Laravel, .NET e Spring';
      break;

default:
    msg = 'Plataforma não disponível';
}

console.log(msg);

/*-----------------------------------------------*/
console.log("\n");
const hoje2 = new Date();
hoje2.setHours(20);
hoje2.setMinutes(0);
hoje2.setSeconds(0);

console.log(hoje2.toLocaleTimeString());

/*-----------------------------------------------*/
console.log("\n");
const ingredientes = ['açúcar', 'farinha de trigo', 'ovo'];

for (index in ingredientes){
    console.log(index + ' - ' + ingredientes[index]);
}

/*-----------------------------------------------*/
console.log("\n");
const dataAtual = new Date();

const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getDate();

if (diaSemana == 5 && diaMes == 13) {
  console.log('Cuidado! Hoje é sexta-feira 13');
} else if (diaMes == 13) {
  console.log('Sextou!!!');
} else {
    console.log('Outro dia');
}

/*-----------------------------------------------
const 
hoje3 = new Date();
const diferencaHoras3 = hoje3.getUTCMinutes() / 60;

console.log('Diferença de horário: ' + diferencaHoras3 + ' horas');*/

const totalAcertos = 4;
const primeiroAcerto = new Date('2020/10/05');
let index4 = 0;
do {
  console.log( primeiroAcerto.toDateString() );

  const dia = primeiroAcerto.getDate();
  primeiroAcerto.setDate(dia + 1);

  index4++;
} while (index4 < totalAcertos);

/*-----------------------------------------------*/
const hoje6 = new Date();
const ano6 = hoje6.getFullYear();

if ( ano6 % 4 == 0 ) {
  console.log( 'Ano bissexto' );
} else {
  console.log( 'Não é ano bissexto' );
}

/*-----------------------------------------------*/
const convidados = [
  { nome: 'José', cerveja: false},
  { nome: 'Augusto', cerveja: true},
  { nome: 'Tomas', cerveja: true},
  { nome: 'Joana', cerveja: false},
  { nome: 'Aline', cerveja: false},
];

let totalDeConvidados = convidados.length;
let bebemRefrigerante = 0;
let bebemCerveja = 0;

for ( const convidado of convidados) {
  if (convidado.cerveja == true) {
    bebemCerveja++;
  } else {
    bebemRefrigerante++;
  }
}

console.log('Total de convidados: ' + totalDeConvidados);
console.log('Bebem cerveja: ' + bebemCerveja);
console.log('Bebem refrigerante: ' + bebemRefrigerante);

/*-----------------------------------------------*/
const 
hoje7 = new Date();
//getUTCMinutes
//getTimezoneOffset
//getMinutes
//getTime
const diferencaHoras7 = hoje7.getTime() / 60;

console.log('Diferença de horário: ' + diferencaHoras7 + ' horas');
