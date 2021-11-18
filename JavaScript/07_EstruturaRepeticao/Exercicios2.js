let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for (let contador = 0; contador < produtos.length; contador++){
    
    //console.log('teste2');
    let produto = produtos[contador];

    for (let propriedade in produtos[contador]){

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