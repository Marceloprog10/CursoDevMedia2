
//Sem parâmetro: Data atual
const hoje= new Date();
console.log(hoje);

//Com parâmetro: String com a data
const exemplo1 = new Date("2020-02-28");
console.log(exemplo1);

const exemplo2 = new Date("2020-02-27 10:35:00");
console.log(exemplo2);

//Com parâmetro: Um número para ano, mês, dia, hora, minuto, segundo e milissegundo
const exemplo3 = new Date(2020, 2, 28, 13, 20, 2, 15);
console.log(exemplo3);

/*--------------------------------------------------------*/
const exemplo4 = new Date();

//Imprimindo uma string com a data e a hora local
console.log( exemplo4.toLocaleString() );

//Imprimindo uma string com a data armazenada
console.log( exemplo4.toString() );

//Imprimindo uma string com a data universal (UTC)
console.log( exemplo4.toUTCString() );

//Imprimindo timestamp
console.log( exemplo4.valueOf() );

/*--------------------------------------------------------*/
const dataAtual = new Date();
const dataPostagem = new Date('2020-11-11T00:00');

//Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

//Verifica a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

//Convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

//Exibindo a diferença
console.log(horas);

/*--------------------------------------------------------*/
//PARA O FORMATO TIMESTAMP
const dataAtual2 = new Date();

console.log( dataAtual2.getFullYear() );
console.log( dataAtual2.getMonth() );
console.log( dataAtual2.getDate() );
console.log( dataAtual2.getHours() );
console.log( dataAtual2.getMinutes() );
console.log( dataAtual2.getSeconds() );
console.log( dataAtual2.getMilliseconds() );
console.log( dataAtual2.getDay() );

/*--------------------------------------------------------*/
//PARA O FORMATO UTC
console.log( dataAtual2.getUTCFullYear() );
console.log( dataAtual2.getUTCMonth() );
console.log( dataAtual2.getUTCDate() );
console.log( dataAtual2.getUTCHours() );
console.log( dataAtual2.getUTCMinutes() );
console.log( dataAtual2.getUTCSeconds() );
console.log( dataAtual2.getUTCMilliseconds() );
console.log( dataAtual2.getUTCDay() );

/*--------------------------------------------------------*/
const dataAtual3 = new Date();

console.log( dataAtual3.getTime() );
console.log( dataAtual3.getTimezoneOffset() );
console.log( dataAtual3.valueOf() );

/*--------------------------------------------------------*/
console.log('\n');
const dataAtual4 = new Date();
const personalizandoData =  {
    weekday: 'long', // segunda-feira
    weekday: 'short', // seg.
    weekday: 'narrow', // S

    month: "numeric", // 2
    month: "2-digit", // 02
    month: "long", // Março
    month: "short", // Mar
    month: "narrow", // M

    year: 'numeric', // 2020
    year: '2-digit', // 20

    day: 'numeric', // 1
    day: '2-digit', // 01
  };

console.log(dataAtual4.toLocaleDateString('pt-BR', personalizandoData));

/*--------------------------------------------------------*/
const personalizandoTempo = {
    hour: 'numeric', // 1
    hour: '2-digit', // 01,

    minute: 'numeric', // 1
    minute: '2-digit', // 01,

    second: 'numeric', // 1
    second: '2-digit', // 01,
}

console.log(dataAtual4.toLocaleTimeString('pt-BR', personalizandoTempo) );

/*--------------------------------------------------------*/
const personalizandoDataTempo = {
    dateStyle: "full", // segunda-feira, 9 de novembro de 2020
    dateStyle: "long", // 9 de novembro de 2020
    dateStyle: "medium", // 9 de nov. de 2020
    dateStyle: "short", // 09/11/2020

    timeStyle: "full", // 01:05:09 Horário Padrão de Brasília
    timeStyle: "long", // 01:05:09 BRT
    timeStyle: "medium", // 01:05:09
    timeStyle: "short", // 01:05
}

console.log(dataAtual4.toLocaleString('pt-BR', personalizandoDataTempo) );
