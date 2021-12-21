
let listaJogos = [];

listaJogos.push("Super Mario World");
listaJogos.push("The Last of Us");
listaJogos.push("Gears of War");

//da forma como respondi
//listaJogos.forEach(function(jogo){
//	console.log(jogo);
//});

//De outra forma como fazer usando "arrow function"
listaJogos.push("Teste Marcelo");
listaJogos.forEach(jogo =>{
    console.log(jogo);
})


/*******************************************************/
let linguagem = "JavaScript";
let stack = "mobile";

switch(stack) {
    case "back-end":
        console.log(`Estude Node.js para programação ${stack} em ${linguagem}`);
    break;

    case "front-end":
        console.log(`Estude React para programação ${stack} em ${linguagem}`);
    break;

    case "mobile":
        console.log(`Estude React Native para programação ${stack} em ${linguagem}`);
    break;

    //Eu Respondi asim,
    //default :
    //    console.log(`Tecnologia indisponível para ${linguagem}`);
    //break;
    //Essa seria a forma correta
    default :
        console.log(`Tecnologia indisponível para ${stack}`);
    break;    
}

//horas para o natal
const dataHoje = new Date();
const dataNatal = new Date('2022-12-25T00:00');

const timeHoje = dataHoje.getTime();
const timeNatal = dataNatal.getTime();

const tempoFalta = timeHoje - timeNatal;

const segundos = tempoFalta / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

if(horas > 1)
{
    console.log("Faltam "+horas+" horas para o Natal de 2022");
}
else
{
    console.log("Falta "+horas+" hora para o Natal de 2022");
}