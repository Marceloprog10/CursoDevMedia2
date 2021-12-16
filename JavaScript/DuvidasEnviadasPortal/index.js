
let listaJogos = [];

listaJogos.push("Super Mario World");
listaJogos.push("The Last of Us");
listaJogos.push("Gears of War");

//da forma como respondi
listaJogos.forEach(function(jogo){
	console.log(jogo);
});

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

    default :
        console.log(`Tecnologia indisponível para ${linguagem}`);
    break;
}