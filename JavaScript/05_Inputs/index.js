import entradaDados from 'readline-sync';

/**********************************************************/
let nome = entradaDados.question("Digite seu nome: ");
console.log("Olá, " + nome);

/**********************************************************/
let x = entradaDados.question("valor x ");
let y = entradaDados.question("valor y ");
let soma = Number(x) + Number(y); 
console.log("soma: " + soma);

/**********************************************************/
console.log("Área do triângulo: \n");
let base = entradaDados.question("Informe a base: ");
let altura = entradaDados.question("Informe a altura: ");
let area = (base * altura) / 2;
console.log("A área do triângulo é: " + area);

/**********************************************************/

let diametro = entradaDados.question('Informe o diâmetro: ');
let raio = diametro / 2;
console.log(raio);

/**********************************************************/
//import entrada from 'readline-sync';

let n1 = entradaDados.question('Informe o nota 1: ');
let n2 = entradaDados.question('Informe o nota 2: ');
let n3 = entradaDados.question('Informe o nota 3: ');
let n4 = entradaDados.question('Informe o nota 4: ');

let media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;
console.log(media);

/**********************************************************/
