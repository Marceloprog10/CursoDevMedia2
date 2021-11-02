/**********************************************************/

let programador = "Marcelo";
let tecnologia = "JavaScript";
let frase = `Acentos graves ${programador} sabe programar em ${tecnologia}`;
console.log(frase);
frase = "Aspas duplas/simples " + programador + " sabe programar em " + tecnologia;
console.log(frase);

console.log();
console.log('Marcelo possui ' + programador.length + " caracteres.");

/**********************************************************/
console.log("\n");
let programador_1 = "Flávia";
let programador_2 = "flávia";
if (programador_1.toUpperCase() == programador_2.toUpperCase()){
    console.log("iguais");
} else {
    console.log("diferentes");
}

/**********************************************************/
console.log("\n");
let programador_3 = "  Marcelo de Matos ";
console.log(programador_3.trim());

/**********************************************************/
console.log("\n");
let label = "Email: ";
let email = "contato@email.com";
console.log( label.padEnd(20, '*') + email );

/**********************************************************/
console.log("\n");
let texto = "A linguagem PHP é muito poderosa.";
let resultado = texto.replace("PHP", "JavaScript");
console.log(resultado); 

/**********************************************************/
console.log("\n");
let frase_2 = "Eu sou programador JavaScript";
console.log( frase_2.substr(7, 11)); // programador
console.log( frase_2.substring(7, 18)); // programador

/**********************************************************/
console.log("\n");
let frase_3 = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
console.log(frase_3.indexOf("sonho")); // 14


let expressao_proibida = "passaporte falso";
let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();
if ( comentario.indexOf(expressao_proibida) > -1 ){
    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");
} else {
    console.log("Seu comentário foi aprovado");
}
console.log(comentario); // venda de passaporte falso

/**********************************************************/
console.log("\n");
let paises_string = "Brasil, Espanha, Canadá, Irlanda, Suíça";
let paises_array = paises_string.split(", ");
console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]
/**********************************************************/

const chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
];

let titulo = "=== chuvas de meteoros - hemisfério sul ===";
console.log(titulo.toUpperCase());
console.log("\n");

for ( const chuva of chuvas_meteoros ){
    let nome_chuva = chuva.nome;
    let pico_chuva = chuva.pico;
    let velocidade_chuva = chuva.velocidade;
    let pico_mes_dia = pico_chuva.split(" ");
    let pico_dia = pico_mes_dia[1];
    let pico_mes = pico_mes_dia[0];
    let pico_mes_nome = "";

    switch (pico_mes) {
        case "Jan":     pico_mes_nome = "Janeiro";     break;
        case "Fev":     pico_mes_nome = "Fevereiro";     break;
        case "Mar":     pico_mes_nome = "Março";     break;
        case "Abr":     pico_mes_nome = "Abril";     break;
        case "Mai":     pico_mes_nome = "Maio";     break;
        case "Jun":     pico_mes_nome = "Junho";     break;
        case "Jul":     pico_mes_nome = "Julho";     break;
        case "Ago":     pico_mes_nome = "Agosto";     break;
        case "Set":     pico_mes_nome = "Setembro";     break;
        case "Out":     pico_mes_nome = "Outubro";     break;
        case "Nov":     pico_mes_nome = "Novembro";     break;
        case "Dez":     pico_mes_nome = "Dezembro";     break;
        default:        pico_mes_nome = "Mês inválido";    break;
    }

    let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome;
    let velocidade_formatada = velocidade_chuva.replace("km/s", "quilômetros por segundo");

    console.log("Nome: ".padEnd(30, ".") + nome_chuva);
    console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada);
    console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada);
    console.log("\n");
}
/**********************************************************/


let label4 = "Email: ";
let email4 = "contato@email.com";
console.log( label4.padEnd() + email4 );

/**********************************************************/
/**********************************************************/
/**********************************************************/