function retorna_status_aluno(nota_1, nota_2){

    let media = (nota_1 + nota_2) / 2;
    let status;

    if(media >= 6){
        status = "aprovado";
    } else {
        status = "reprovado";
    }

    return status;

}

let status_aluno_1 = retorna_status_aluno(7, 8);
console.log("Aluno 1: " + status_aluno_1);

let status_aluno_2 = retorna_status_aluno(4, 7);
console.log("Aluno 2: " + status_aluno_2);

/*----------------------------------------------------------*/
const retorna_media1 = (nota_1, nota_2) => {

    let media = (nota_1 + nota_2) / 2;
    return media;

}

let media_aluno1 = retorna_media1(9, 8);
console.log("A média do aluno é: " + media_aluno1);

/*----------------------------------------------------------*/
const retorna_media2 = (nota_1, nota_2) => (nota_1 + nota_2) / 2;

let media_aluno2 = retorna_media2(9, 8);
console.log("A média do aluno é: " + media_aluno2);

/*----------------------------------------------------------*/
let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {

    if ( tipo_comparacao == "and" ){
        return (data >= data_inicio && data <= data_fim);
    } else if( tipo_comparacao == "or" ){
        return (data >= data_inicio || data <= data_fim);
    }
    
}

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();
    for ( const signo of signos ){

        let data_inicio_signo =
         new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo =
         new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verifica_data_range
         (data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
            return signo["Nome"];
        }
    }

}

let data_app = new Date();

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);

/*----------------------------------------------------------*/