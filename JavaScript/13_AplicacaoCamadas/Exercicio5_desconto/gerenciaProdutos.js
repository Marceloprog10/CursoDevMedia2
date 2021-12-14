function aplicaDesconto(precoProduto){
    let descontoPorcento = 20;
    let valorDesconto = (descontoPorcento / 100) * precoProduto;
    let precoFinal = precoProduto - valorDesconto;

    return precoFinal;
}

function listaProdutos(produtos){
    let data = new Date();
    let mes = data.getMonth();

    produtos.forEach(produto => {
        let nomeProduto = produto.nome;
        let precoProduto = produto.preco;

        precoProduto = precoProduto > 350 ? aplicaDesconto(precoProduto) : precoProduto;

        console.log("Produto: "+nomeProduto+" - Preço: R$ "+precoProduto);
    });
}

export default listaProdutos;