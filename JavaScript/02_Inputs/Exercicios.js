
/*********************************************************
console.log("\n");
let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while ( contador < funcionarios.length ) {
    let funcionario = funcionarios[contador];
    if(funcionario.nome == "Renan"){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}*/

/*********************************************************/
let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for(let contador = 0; contador < produtos.length; contador++) {
    let produto = produtos[contador];

    for(let propriedade in produtos[contador]) {
        if ( propriedade == "preco" ) {
            let preco = propriedade;
            let novo_preco = produto[preco] - desconto;
            console.log("preço atualizado: R$" + novo_preco + ",00");
        } else {
            console.log(propriedade + ": " + produto[propriedade]);
        }
    }
    console.log("\n");
}

/*********************************************************/
let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while (contador < funcionarios.length) {
    let funcionario = funcionarios[contador];

    if(funcionario.habilitado){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;       
        break;
    }

    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

/**********************************************************/
let idade = 18;
let resultado; 
(idade >= 18) ? resultado = "Maior de idade" : resultado = "Menor de idade";
console.log(resultado);
