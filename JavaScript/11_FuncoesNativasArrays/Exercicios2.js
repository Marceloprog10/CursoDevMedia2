const CSeparador = "***********************************************************";

const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];
const marca = "Ford";
const modelo = "KA+";
  
const carrosEncontrados = carros.filter( (carro) => {
    return ( carro.marca == marca && carro.modelo == modelo );
});

console.log(carrosEncontrados);

/***************************************************************************************/
console.log("\n", CSeparador);

const itensOpcionais = [
    { nome: 'Pré som', valor: 800 },
    { nome: 'Conta-giros', valor: 500 },
    { nome: 'Desembaçador traseiro', valor: 1000 },
    { nome: 'Ar quente', valor: 1800 },
  ];
  
  const valorTotal = 
  itensOpcionais.reduce( ( total, item ) => {      
    return total + item.valor;
  }, 0);
  
  console.log('R$ ' + valorTotal.toFixed(2));

/***************************************************************************************/
console.log("\n", CSeparador);

const noticias = [
    'Cyberpunk 2077: Ray Tracing será exclusivo Nvidia no lançamento ',
    'Elon Musk planeja criar uma colônia de humanos em Marte até 2050 ',
//    'Among Us ganhará tradução em português do Brasil '
];
const novaNoticia = 'Among Us ganhará tradução em português do Brasil ';
  
//noticias[0] = novaNoticia;
noticias.shift();
noticias.push(novaNoticia);

  
for (const noticia of noticias) {
    console.log(noticia);
}

/***************************************************************************************/
console.log("\n", CSeparador);

const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos',	  declinacao:	-59 },
    { nome: 'Gama Normídeos',	      declinacao:	-50 },
    { nome: 'Pi Pupídeos',	          declinacao:	-45 },
    { nome: 'Líridas',	              declinacao:	 34 },
    { nome: 'Eta Aquáridas',	      declinacao:	 -1 },
    { nome: 'Eta Líridas',	          declinacao:	 44 },
    { nome: 'Bootídeos de Junho',	  declinacao:	 48 },
    { nome: 'Alfa Capricornídeos',    declinacao:	-10 },
    { nome: 'Delta Aquáridas do Sul', declinacao:	-16 },
    { nome: 'Piscis Austrinídeos',	  declinacao:	-30 },
    { nome: 'Perseidas',	          declinacao:	 58 }
  ];
  
  function imprimirChuva(chuva){
    const hemisferio = ( chuva.declinacao >= 0 ) ? 'Norte' : 'Sul';
    console.log( 'Chuva: ' + chuva.nome + ' Hemisfério :' + hemisferio );
  }
  
  chuvaDeMeteoros.forEach(imprimirChuva);

/***************************************************************************************/
console.log("\n", CSeparador);
const dataAtual = new Date();

const ano = dataAtual.getFullYear();
const proximoAno = ano + 1;

console.log(proximoAno);


/***************************************************************************************/
console.log("\n", CSeparador);

const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
];
  
const totalVolume = itensCarrinho.reduce( (total, itemCarrinho) => {    
    return(total + itemCarrinho.qnt);
}, 0);
  
console.log(totalVolume);

/***************************************************************************************/
console.log("\n", CSeparador);

const tecnologias = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Angular"
];
  
tecnologias.splice(1,2);
tecnologias.forEach((tecnologia) => {
    console.log(tecnologia)
});





