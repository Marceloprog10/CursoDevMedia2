var Oi = "Hello World Novo Marcelo";
function ImprimirTexto(Texto){
    console.log(Texto);
}

ImprimirTexto(Oi);

/*--------------------------------------------------*/
var numero = 9;
console.log(numero++);
console.log(numero);

/*--------------------------------------------------*/
var graus_celsius = 15;
var graus_fahrenheit = (graus_celsius * 9/5 ) + 32;
console.log(graus_celsius + "°C equivalem a " + graus_fahrenheit + "°F" );

/*--------------------------------------------------*/
var idade = 18;
var atendeAClassificacaoEtaria = idade >= 18;
console.log(atendeAClassificacaoEtaria);

/*--------------------------------------------------*/
var materia = null;
console.log(materia == null);

/*--------------------------------------------------*/
var preco = 10;
var desconto = 0.1;
var novo_preco = preco - ( ( preco / desconto ) / 100 );
console.log(novo_preco);

/*--------------------------------------------------*/
var situacao;
console.log(situacao);

/*--------------------------------------------------*/
var avaliacao_1 = 6;
var avaliacao_2 = 5;
var media = (avaliacao_1 + avaliacao_2) / 2;
console.log("A média do aluno é igual a: " + media);

/*--------------------------------------------------*/
var forca; // N
var massa = 2; // kg
var aceleracao = 6; // m/s²
forca = massa * aceleracao;
console.log("O valor da força é de " + forca + "N");

/*--------------------------------------------------*/
var preco = 10;
preco += 20;
console.log(preco);
/*--------------------------------------------------*/
console.log( "1" + 1 );
console.log( 15 % 2 );
console.log( true + true );

/*--------------------------------------------------*/
var produto = {
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
};
console.log(produto.nome);

var pessoa = {
    cpf: 0,
    nome: ""
};
pessoa.cpf = 06997102948;
pessoa.nome = "Marcelo de Matos";
console.log(pessoa);

/*--------------------------------------------------*/
function teste(Apessoa) {
    return Apessoa.nome;
};

console.log(teste(pessoa));

/*--------------------------------------------------*/
var Alunos = [
    {id: 1, nome: "Marcelo", idade: 32},
    {id: 2, nome: "Pedro", idade: 20},
    {id: 3, nome: "João", idade: 2}
];

var aluno = 0;
for (aluno in Alunos) {
    console.log(Alunos[aluno]);
};

/*--------------------------------------------------
//Método para sortear 49 itens.
var quant = 0;
while (quant <= 50) { 
    var Item = Math.floor(Math.random() * 50);    
    console.log(quant + '  ' + Item);    
    quant++;
};*/
console.log("");
console.log("");
console.log("");

/*--------------------------------------------------*/
var colecao_animes = [
    { id: 1, titulo: "Naruto",      episodios: 673 },
    { id: 2, titulo: "Bleach",      episodios: 366 },
    { id: 3, titulo: "One Piece",   episodios: 931 },
];

var primeiro_anime = colecao_animes[1];

var id_anime = primeiro_anime.id;
var titulo_anime = primeiro_anime.titulo;
var total_episodios_anime = primeiro_anime.episodios;

console.log("Id do anime: " + id_anime);
console.log("Título do anime: " + titulo_anime);
console.log("Total de episódios do anime: " + total_episodios_anime);

const url = "https://www.site.com.br";
console.log(url);

/*--------------------------------------------------*/
var colecao_livros = [
    { id: 1, nome: "Dom Quixote",           numero_paginas: 863 },
    { id: 2, nome: "O Senhor dos Anéis",    numero_paginas: 1200 },
    { id: 3, nome: "As Crônicas de Nárnia", numero_paginas: 752 },
    { id: 4, nome: "O Caçador de Pipas",    numero_paginas: 371 },
    { id: 5, nome: "A Montanha Mágica",     numero_paginas: 848 }
];

var total_livros = colecao_livros.length;
primeiro_livro = colecao_livros[0];
ultimo_livro = colecao_livros[4];
console.log( "O total de livros é: " + total_livros );
console.log( "O nome do primeiro livro da coleção é: " + primeiro_livro.nome );
console.log( "O nome do último livro da coleção é: " + ultimo_livro.nome );

/*--------------------------------------------------*/
var x = "";
var y = 0;

if (x == y) {
    console.log("x e y iguais");  
}
else {
    console.log("x e y diferentes");
}

/*--------------------------------------------------*/
