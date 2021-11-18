
/*----------------------------------------------------------*/
const colecaoNomes = ["Alberto", "Alex", "Sandro", "Roberta"];

for (let indice = 0; indice < colecaoNomes.length; indice++) {
  const nomeMaiusculo = colecaoNomes[indice].toUpperCase();
  
  colecaoNomes[indice] = nomeMaiusculo;
}

console.log(colecaoNomes);

/*----------------------------------------------------------*/
let lista_numeros = [1, 3, 5, 10];

const retorna_soma = (numeros) => {

    let soma = 0;
    for (const numero of numeros){
        soma = numero + soma;
    }

    return soma;

}

let resultado = retorna_soma(lista_numeros);
console.log("A soma dos resultados é igual a : " + resultado);

/*----------------------------------------------------------*/
const celsius_fahrenheit = (temperatura_celsius) => {

    temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;
    return temperatura_fahrenheit;

}

temperatura_celsius = 12;
temperatura_fahrenheit = celsius_fahrenheit(temperatura_celsius);

console.log(temperatura_celsius + "°C equivalem a " + temperatura_fahrenheit + "°F");
/*----------------------------------------------------------*/

const remove_espacos = ( texto ) => {
    return texto.trim();
}

let frase = "  Estou aprendendo funções na linguagem JavaScript        ";

let resultado1 = remove_espacos(frase);

console.log(resultado1);
/*----------------------------------------------------------*/

const verifica_tipo_usuario = (tipo) => {
    switch (tipo) {
        case 1:
            return 'Comum';        

        case 2:
            return 'Editor';
        
        case 3:
            return 'Administrador';

        default:
            return 'Tipo desconhecido';
    }
}

let tipo_usuario = verifica_tipo_usuario(5);
console.log(tipo_usuario);

/*----------------------------------------------------------*/
function verifica_tamanho_senha(senha){   
    if (senha.length >= 10){
       return true;
    }
}

let senha_cadastro = "minha_senha";

//if (verifica_tamanho_senha(senha_cadastro) == true){//remover esse ==true
if (verifica_tamanho_senha(senha_cadastro)){
    console.log("A senha possui o mínimo de 10 caracteres");
} else {
    console.log("A senha não possui o mínimo de 10 caracteres");
}

/*----------------------------------------------------------*/
let numero_1 = 15;
let numero_2 = 4;

console.log(numero_1 % numero_2);

/*----------------------------------------------------------*/
function retorna_mensalidade(){
    return 50;
}

let valor_mensalidade = retorna_mensalidade();
console.log("O valor da mensalidade é: " + valor_mensalidade.toFixed(2));

/*----------------------------------------------------------*/
function retorna_versao(){
    return 1.1;
}

let versao = retorna_versao();
console.log(versao);

/*----------------------------------------------------------*/
/*let email = "exemplo@devmedia.com.br";
let dominio = (email.substr("@") + 1);

console.log(dominio);*/

/*----------------------------------------------------------*/
let signos = [
    {"Nome": "Aquário", "DataInicio": "01-21","DataFim":"02-19"},
    {"Nome": "Peixes", "DataInicio": "02-20","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-20"},
    {"Nome": "Touro", "DataInicio": "04-21","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-22","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-21","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-23"},
    {"Nome": "Virgem", "DataInicio": "08-24","DataFim":"09-23"},
    {"Nome": "Libra", "DataInicio": "09-24","DataFim":"10-23"},
    {"Nome": "Escorpião", "DataInicio": "10-24","DataFim":"11-22"},
    {"Nome": "Sagitário", "DataInicio": "11-23","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-20"}
];

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {

    if ( tipo_comparacao == "in" ){
        return (data >= data_inicio && data <= data_fim);
    } else if( tipo_comparacao == "out" ){
        return (data >= data_inicio || data <= data_fim);
    }

}

const retorna_signo = (signos, data) => {

    data.setUTCHours(0, 0, 0, 0);

    let ano = data.getFullYear();

    for(const signo of signos){

        let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"]);
        let data_fim_signo = new Date(ano + "-" + signo["DataFim"]);

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "out" : "in";

        if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
            return signo["Nome"];
        }
    }
}

let data = new Date();

const nome_signo = retorna_signo(signos, data);

console.log("O signo de hoje é: " + nome_signo);

/**********************************************************************************************/
console.log("\n");
let texto = "A linguagem JavaScript é excelente!";
//let resultado2 = texto.substr(12, 23);
let resultado2 = texto.substring(12, 35);

console.log(resultado2)

/**********************************************************************************************/
