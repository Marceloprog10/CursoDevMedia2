import colecao_signos from './dados/dados.js';
import retorna_signo from './funcoes/funcoes.js';

let data_app = new Date();
const nome_signo = retorna_signo(colecao_signos, data_app);
console.log("O signo de hoje é: " + nome_signo);


let string = "Estou aprendendo1JavaScript na DevMedia";
let resultado = string.substring(6,16);

console.log(resultado);

let soma = 12;
console.log("A soma entre os números é: " soma);