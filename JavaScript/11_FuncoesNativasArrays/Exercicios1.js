const CSeparador = "***********************************************************";
const diasDaSemana = [
    "domingo", 
    "segunda-feira", 
    "terça-feira",
    "quarta-feira", 
    "quinta-feira", 
    "sexta-feira"//, 
    //"sábado"
];
diasDaSemana.push("Sábado"); //Adiona o item no fim do array
console.log(diasDaSemana);

diasDaSemana.splice(2,1); // removendo "terça-feira"
//diasDaSemana.splice(1,3); // removendo "segunda-feira", "terça-feira", "quarta-feira"
console.log(diasDaSemana);

/***************************************************************************************/
console.log("\n", CSeparador);

const produto = {
    nome: 'New Super Mario Bros.', qnt: 1, valor: 250
};

const carrinho = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
];

// Insere o produto no carrinho
carrinho.push(produto);

// Remove o item "Super Mario Kart 8"
carrinho.splice(1,1);

console.log(carrinho);

//Remove todos os elementos do carrinho
carrinho.splice(0, carrinho.length);
console.log(carrinho);

/***************************************************************************************/
console.log("\n", CSeparador);
const produtos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
  ];
  
  function imprimirProduto (produto, index) {
    console.log( index + ' - ' + produto.nome );
  }
  
  produtos.forEach(imprimirProduto);

  /***************************************************************************************/
  console.log("\n", CSeparador);
  const carrinho2 = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 2, valor: 300 },
    {  nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
  ];
  
  function imprimirItem( produto, index ) {
    let texto = index + ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;

    console.log( texto );
  }
  
  carrinho2.forEach(imprimirItem);
  /***************************************************************************************/
  console.log("\n", CSeparador);
  const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];
  
  function retornaCarro(carro) {
    return carro.marca + ' ' + carro.modelo + ' ano: ' + carro.anoFabricacao;
  }
  
  const novosCarros = carros.map(retornaCarro);
  
  console.log(novosCarros);
  
  /***************************************************************************************/
  console.log("\n", CSeparador);
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  function abreviar(mes) {
    return mes.substr(0,3)
  }

  const mesesAbreviados = meses.map(abreviar);

  console.log(mesesAbreviados);

/***************************************************************************************/
  console.log("\n", CSeparador);
  const carros3 = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];

  function retornarCarroFiat(carro) {
    return (carro.marca == 'Fiat');
  }

  const carrosFiat = carros3.filter( retornarCarroFiat );

  console.log(carrosFiat);
  
/***************************************************************************************/
 console.log("\n", CSeparador);  
 const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 3, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
  ];
  
  function somarValor (total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;
  
    return total + valorTotal;
  }
  
  const valorAPagar = itensCarrinho.reduce(somarValor, 0);
  
  console.log(valorAPagar);

/***************************************************************************************/
console.log("\n", CSeparador);  
const frutas = ["Manga","Laranja","Tangerina","Banana"];

console.log("\nArray antes da ordenação:\n");
console.info(frutas);

frutas.sort();

console.log("\nArray depois da ordenação:\n");
console.info(frutas);
console.log("\n");

/***************************************************************************************/
console.log("\n", CSeparador);  
const numeros = [10,1,2];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);

function ordenaNumeros(a, b){
    return a - b;
}

numeros.sort(ordenaNumeros);

console.log("\nArray depois da ordenação:\n");
console.info(numeros);
console.log("\n");

/***************************************************************************************/
console.log("\n", CSeparador);  
let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];

function ordenaMaisPontos(a, b){
    //return a.pontos - b.pontos; // ordem crescente
    return b.pontos - a.pontos; // ordem descrescente
}

tabela.sort(ordenaMaisPontos);

for(let i = 0; i < tabela.length; i++)
{
    let posicao = i+1;
    console.log(posicao+" | "+tabela[i].equipe+" - "+tabela[i].pontos+" pts");
}

/***************************************************************************************/
console.log("\n", CSeparador);  
const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos',      declinacao: -59 },
    { nome: 'Gama Normídeos',         declinacao: -50 },
    { nome: 'Pi Pupídeos',            declinacao: -45 },
    { nome: 'Líridas',                declinacao:  34 },
    { nome: 'Eta Aquáridas',          declinacao:  -1 },
    { nome: 'Eta Líridas',            declinacao:  44 },
    { nome: 'Bootídeos de Junho',     declinacao:  48 },
    { nome: 'Alfa Capricornídeos',    declinacao: -10 },
    { nome: 'Delta Aquáridas do Sul', declinacao: -16 },
    { nome: 'Piscis Austrinídeos',    declinacao: -30 },
    { nome: 'Perseidas',              declinacao:  58 },
  ];
 
  const chuvasNoNorte = chuvaDeMeteoros.filter(
    (chuva) => chuva.declinacao >= 0
  );
 
  const chuvasNoSul = chuvaDeMeteoros.filter(
    (chuva) => chuva.declinacao < 0
  );
 
  const imprimirChuva = function(chuva) {
    console.log(chuva);
  };
 
  console.log("\nChuvas no hemisfério Norte:");
  chuvasNoNorte.forEach( imprimirChuva );
 
  console.log("\nChuvas no hemisfério Sul:");
  chuvasNoSul.forEach( imprimirChuva );

/*--------------------------*/

let listaJogos = [];

listaJogos.push("Super Mario World");
listaJogos.push("The Last of Us");
listaJogos.push("Gears of War");

listaJogos.forEach(function(jogo){
	console.log(jogo);
});