import colecao_signos from './dados/dados.js';
import retorna_signo from './funcoes/funcoes.js';

let data_app = new Date();
const nome_signo = retorna_signo(colecao_signos, data_app);
console.log("O signo de hoje é: " + nome_signo);


/* -- para resolver um exercicio que estou só errando 

import colecao_signos from './dados/dados.js';
import retorna_signo from './funcoes/funcoes.js';

let data_app = new Date();

const nome_signo = retorna_signo(data_app, colecao_signos);

console.log("O signo de hoje é: " + nome_signo);*/
