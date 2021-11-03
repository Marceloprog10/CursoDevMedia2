/*--------------------------------------------------------*/
console.log('\n');
const dataAtual5 = new Date();
const personalizandoData =  {
    weekday: 'long', // segunda-feira
    month: "2-digit", // 02
    year: '2-digit', // 20
    day: '2-digit', // 01
};
console.log(dataAtual5.toLocaleDateString('pt-BR', personalizandoData));
// segunda-feira, 09/11/20

/*--------------------------------------------------------*/  
const personalizandoTempo = {
    hour: 'numeric', // 01
    minute: 'numeric', // 05
    second: 'numeric', // 09
}
console.log(dataAtual5.toLocaleTimeString('pt-BR', personalizandoTempo) );
// 01:05:09

/*--------------------------------------------------------*/  
const personalizandoDataTempo = {
    dateStyle: "medium", // 9 de nov. de 2020
    timeStyle: "short", // 01:05
}
console.log(dataAtual5.toLocaleString('pt-BR', personalizandoDataTempo) );
// 9 de nov. de 2020 01:05

/*--------------------------------------------------------*/
const MesAno = {
      month: "numeric",
      year: 'numeric',
}
console.log(dataAtual5.toLocaleString('pt-BR', MesAno) );
//  11/2020

/*--------------------------------------------------------*/
const SemanaHora = {
    weekday: "long",
    hour: 'numeric',
    minute: 'numeric',
}
console.log(dataAtual5.toLocaleString('pt-BR', SemanaHora) );
// Terça-feira 2:45 PM

/*--------------------------------------------------------*/
console.log('\n');
const dataAtual = new Date();

dataAtual.setFullYear(1998);
console.log( dataAtual );

dataAtual.setMonth(1);
console.log( dataAtual );

dataAtual.setDate(20);
console.log( dataAtual );

dataAtual.setHours(11);
console.log( dataAtual );

dataAtual.setMinutes(0);
console.log( dataAtual );

dataAtual.setSeconds(59);
console.log( dataAtual );

dataAtual.setMilliseconds(15);
console.log( dataAtual );

/*--------------------------------------------------------*/
console.log('\n');
const dataAtual3 = new Date("2020-11-09 01:05:09");
console.log(dataAtual3.toDateString());
// Impressão: Mon Nov 09 2020

dataAtual3.setTime(886302309000);
console.log(dataAtual3.toDateString());
// Impressão: Sun Feb 01 1998

/*--------------------------------------------------------*/
console.log('\n');
const dataUltimoAcesso = new Date('2020/11/11 17:00:00');
const dataAtual6 = new Date();

const hora = dataAtual6.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual6.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;

let msg = "";

if ( hora < 6 || hora >= 18 ) {
  msg = 'Boa noite\n';
} else if (hora >= 6  && hora < 12 ) {
  msg = 'Bom dia\n';
} else {
  msg = 'Boa tarde\n';
}

if ( diferencaTime > milissegundosDia ) {
  msg += "Você está ausente há dias!!!";
} else if (diferencaTime > milissegundosHora) {
  msg += "Você está ausente há horas!!!";
} else {
  msg += "Que bom que ainda está aqui!";
}

console.log(msg);