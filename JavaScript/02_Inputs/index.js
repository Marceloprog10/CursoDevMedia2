import entradaDados from 'readline-sync';

/**********************************************************/
//let nome = entradaDados.question("Digite seu nome: ");
//console.log("Olá, " + nome);

/**********************************************************/
//let x = entradaDados.question("valor x ");
//let y = entradaDados.question("valor y ");
//let soma = Number(x) + Number(y); 
//console.log("soma: " + soma);

/**********************************************************/

//console.log("Área do triângulo: \n");
//let base = entradaDados.question("Informe a base: ");
//let altura = entradaDados.question("Informe a altura: ");
//let area = (base * altura) / 2;
//console.log("A área do triângulo é: " + area);

/**********************************************************/
//import readline from 'readline-sync';

//let diametro = readline.question('Informe o diâmetro: ');
//let raio = diametro / 2;
//console.log(raio);

/**********************************************************/
//import entrada from 'readline-sync';

//let n1 = entrada.question('Informe o nota 1: ');
//let n2 = entrada.question('Informe o nota 2: ');
//let n3 = entrada.question('Informe o nota 3: ');
//let n4 = entrada.question('Informe o nota 4: ');

//let media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;
//console.log(media);
/**********************************************************/
//var notas_bimestre = [7, 6, 8, 7];
//var total_notas = notas_bimestre.length;
//var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];
//var media_aluno = (notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3]) / notas_bimestre.length;
//console.log("Média do aluno: " + media_aluno); // Média do aluno: 6.5

/**********************************************************/
var Alunos = [
    {id: 1, nome: "Marcelo", idade: 32},
    {id: 2, nome: "Pedro", idade: 20},
    {id: 3, nome: "João", idade: 2}
];

console.log(Alunos.length);

/**********************************************************/
//var numero_1 = 10;
//var numero_2 = 15;
//console.log(numero_1 != numero_2);

/**********************************************************/
var dia = new Date;
var diaDoMes = dia.getDate();
console.log(diaDoMes);

/**********************************************************/
console.log();
for (let contador = 0; contador < 10; contador++) {
    console.log(contador);
};

/**********************************************************/
console.log();
let contador = 0;
while (contador < 10) {
    console.log(contador);
    contador++;
};

/**********************************************************/
console.log();
let contadora = 0;
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
do {
    console.log(meses[contadora]);
    contadora++;
} while (contadora < meses.length);

/**********************************************************/
console.log();
let aluno = [ 
    {nome: "Marcelo", email: "marcelo@gmail", idade: 32},
    {nome: "Mar", email: "marcelo@gmail", idade: 32},
    {nome: "celo", email: "marcelo@gmail", idade: 32}
]

for (let dados in aluno) {
    console.log(aluno[dados].nome);
}

/**********************************************************/
console.log();
let alunos = [ 
    {nome: "Marcelo", email: "marcelo@gmail", idade: 32},
    {nome: "Mar", email: "marcelo@gmail", idade: 32},
    {nome: "celo", email: "marcelo@gmail", idade: 32}
]

for (let dado of alunos) {
    console.log(dado.nome);
}

/**********************************************************/
console.log();
console.log();
let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for (let curso of cursos_idiomas) {
    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;
    let preco_hora_curso = preco_curso / carga_horaria_curso;

    console.log("Nome do curso: " + nome_curso);
    console.log("Carga horária do curso: " + carga_horaria_curso + " horas");
    console.log("Preço do curso: R$" + preco_curso + ",00");
    
    if (preco_hora_curso >= 15) {
        console.log("Hora/aula superior ou igual a R$15,00");
    } else {
        console.log("Hora/aula inferior a R$15,00");
    }
    console.log("\n");
}

/**********************************************************/
let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };
let percentual_desconto = 5;
for(let propriedade in carro) {

    if (propriedade == "preco") {
        let preco = propriedade;
        let desconto = ( carro[preco] * percentual_desconto ) / 100;
        let novo_preco = carro[preco] - desconto;
        console.log("novo preço: R$" + novo_preco + ",00");

    } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        console.log(propriedade + ": " + carro[propriedade]);
    }
}

/**********************************************************/
let chuvas_de_meteoros = [
    { nome: 'Alfa Centaurídeos',            declinacao: -59,  intensidade: 'Média'},
    { nome: 'Gama Normídeos',               declinacao: -50,  intensidade: 'Média'},
    { nome: 'Pi Pupídeos',                  declinacao: -45,  intensidade: 'Irregular'},
    { nome: 'Líridas',                      declinacao:  34,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',                declinacao:  -1,  intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Eta Líridas',                  declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Bootídeos de Junho',           declinacao:  48,  intensidade: 'Irregular'},
    { nome: 'Alfa Capricornídeos',          declinacao: -10,  intensidade: 'Fraca'},
    { nome: 'Delta Aquáridas do Sul',       declinacao: -16,  intensidade: 'Forte com meteoros lentos e rasto comprido'},
    { nome: 'Piscis Austrinídeos',          declinacao: -30,  intensidade: 'Média'},
    { nome: 'Perseidas',                    declinacao:  58,  intensidade: 'Forte e muito rápidas'},
    { nome: 'Capa Cignídeos',               declinacao:  59,  intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Alfa Aurigídeos',              declinacao:  39,  intensidade: 'Média com meteoros muito rápidos e persistentes'},
    { nome: 'Perseidas de Setembro',        declinacao:  40,  intensidade: 'Média com meteoros rápidos e persistentes'},
    { nome: 'Táuridas do Sul',              declinacao:   9,  intensidade: 'Fraca'},
    { nome: 'Delta Aurigídeos',             declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Oriónidas',                    declinacao:  16,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Dracónidas',                   declinacao:  54,  intensidade: 'Irregular'},
    { nome: 'Épsilon Geminídeos',           declinacao:  27,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos',               declinacao:  37,  intensidade: 'Fraca'},
    { nome: 'Táuridas do Norte',            declinacao:  22,  intensidade: 'Média com meteoros muito lentos mas brilhantes'},
    { nome: 'Leónidas',                     declinacao:  22,  intensidade: 'Irregular com meteoros muito rápidos, atingindo um pico de 33 em 33 anos'},
    { nome: 'Alfa Monocerotídeos',          declinacao:   1,  intensidade: 'Irregular'},
    { nome: 'Monocerotídeos',               declinacao:   8,  intensidade: 'Fraca'},
    { nome: 'Fenícidas',                    declinacao: -53,  intensidade: 'Irregular'},
    { nome: 'Quadrântidas',                 declinacao:  49,  intensidade: 'Forte com velocidades médias'},
    { nome: 'Pupidas-Velidas',              declinacao: -45,  intensidade: 'Média'},
    { nome: 'Sigma Hidrídeos',              declinacao:   2,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos de Dezembro',   declinacao:  30,  intensidade: 'Média'},
    { nome: 'Gemínidas',                    declinacao:  33,  intensidade: 'Forte com velocidades médias, meteoros brancos e numerosos'},
    { nome: 'Coma Berenicídeos',            declinacao:  18,  intensidade: 'Fraca'},
    { nome: 'Úrsidas',                      declinacao:  76,  intensidade: 'Média'},
];

for(let chuva of chuvas_de_meteoros ) {    
    console.log(chuva.nome);
    console.log(chuva.declinacao);
    console.log("\n");
}
