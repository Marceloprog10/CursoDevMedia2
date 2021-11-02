/*O primeiro conjunto de operadores que vamos estudar é dos aritméticos.
Eles são adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%). 
Exemplos:
var quantidadeVagas = 2 + 5; // resultado: 7
var contratados = 7 - 2; // resultado: 5
var valorContribuicao = 2500 * 0.10; // resultado: 250
var primeiraParcela = 2500 / 2; // resultado: 1250

Operador módulo (%)
Esse operador retorna o resto de uma divisão.
Exemplos:
var resto1 = 15 % 4; // resultado: 3
var resto2 = 3 % 1.2; // resultado: 0.6*/

/*--------------------------------------------------*/
var graus_celsius = 15;
var graus_fahrenheit = (graus_celsius * 9/5 ) + 32;
console.log(graus_celsius + "°C equivalem a " + graus_fahrenheit + "°F" );

/*--------------------------------------------------*/
var idade = 18;
var atendeAClassificacaoEtaria = idade >= 18;
console.log(atendeAClassificacaoEtaria);

/*--------------------------------------------------*/
var materia = null;
console.log(materia == null);

/*--------------------------------------------------*/
var preco = 10;
var desconto = 0.1;
var novo_preco = preco - ( ( preco / desconto ) / 100 );
console.log(novo_preco);

/*--------------------------------------------------*/
var situacao;
console.log(situacao);

/*--------------------------------------------------*/
var avaliacao_1 = 6;
var avaliacao_2 = 5;
var media = (avaliacao_1 + avaliacao_2) / 2;
console.log("A média do aluno é igual a: " + media);

/*--------------------------------------------------*/
var forca; // N
var massa = 2; // kg
var aceleracao = 6; // m/s²
forca = massa * aceleracao;
console.log("O valor da força é de " + forca + "N");

/*--------------------------------------------------*/
var preco = 10;
preco += 20;
console.log(preco);
/*--------------------------------------------------*/
console.log( "1" + 1 );
console.log( 15 % 2 );
console.log( true + true );
