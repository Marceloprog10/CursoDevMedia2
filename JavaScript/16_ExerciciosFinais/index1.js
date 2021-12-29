const inverteNomeSobrenome = (NomeSobrenome) => {
    const nome = NomeSobrenome.split(' ');
  
    return nome[1] + ' ' + nome[0];
}
console.log( inverteNomeSobrenome("José Fernandes") );


/********************************************************/
console.log('\n');
const nome = "Aline Silva Souza";

const nomeDividido = nome.split(' ');
const totalPalavras = nomeDividido.length;

const primeiroNome = nomeDividido[0];
const ultimoNome = nomeDividido[totalPalavras -1];

console.log(primeiroNome + ' ' + ultimoNome);

/********************************************************/
console.log('\n');
console.log('produtos marcelo');

const produtos = [
    { nome: 'Xbox 360', valor: 2000 , estoque: 20 },
    { nome: 'Nintendo Switch', valor: 4000, estoque: 15 },
    { nome: 'PS5', valor: 4500, estoque: 10 },
  ];
  
const totalItensEstoque =  produtos.reduce( (total, produto) => {
    return total + produto.estoque;
}, 0);
  
console.log(totalItensEstoque);


//const somarValorProduto = (total, produto) => {
//  const valorEstoque = produto.estoque * produto.valor;
//  return total + valorEstoque;
//}
//const valorEstoque = produtos.________(somarValorProduto, 0);
//console.log(valorEstoque);

/*******************************************************
console.log('\n');

const dataHoje = new Date();
const validade = new Date();

const mesAtual = dataHoje.getMonth();
validade.setMonth(mesAtual + 6);

console.log(validade.parse());*/

/*******************************************************/
console.log('\n');
const validaCampo = (campo) => {

if (campo.valor.length > 0) {
  console.log('Campo ' + campo.nome + ' válido');
} else {
  console.log('Campo ' + campo.nome + ' inválido');
  }
}
  
const campos = [
  { nome: 'usuario', valor: 'jjcarvalho' },
  { nome: 'senha', valor: 'barcoquebradonaoafundanaareia' }
];
  
campos.forEach(validaCampo);

/*******************************************************/
console.log('\n');
const livros = [
    { titulo: 'O hobbit', autor: 'J. R. R. Tolkien', bestSeller: true },
    { titulo: 'O morro dos ventos uivantes', autor: 'Emily Bronte', bestSeller: false },
    { titulo: 'The secret', autor: 'Rhonda Byrne', bestSeller: false },
    { titulo: 'A garota do Lago', autor: 'Charlie Donlea', bestSeller: true },
    { titulo: 'Pessoas normais', autor: 'Sally Rooney', bestSeller: true },
  ];
  
  const verificaBestSeller = livro => livro.bestSeller;
  
  const bestSellers = livros.filter(verificaBestSeller);
  
  bestSellers.forEach(livro => {
    console.log(livro.autor);
  });

  /*******************************************************/
  console.log('\n');

  const funcionarios = [
    { nome: 'José Silva', cargo: 'Gerente', salario: 6000},
    { nome: 'Eliana Rocha', cargo: 'ADM', salario: 3000 },
    { nome: 'Juliana Souza', cargo: 'Vendedor', salario: 2900 },
    { nome: 'Enzo Silva', cargo: 'Vendedor', salario: 2900 },
    { nome: 'Gabriel Machado', cargo: 'Vendedor', salario: 2900 },
  ];
  
  const somarDespesa = (total, funcionario) => {
    return total + funcionario.salario;
  }
  
  const despesasSalario = funcionarios.reduce( somarDespesa , 0);
  console.log(despesasSalario);

  /*******************************************************/
  console.log('\n');
  const retornaDataLimite = (data) => {
  const dataLimite = new Date(data);
  dataLimite.setMonth( dataLimite.getMonth() + 2 );

  return ( dataLimite );
}
console.log(retornaDataLimite(new Date()));


/*******************************************************/
//console.log('\n');
//const totalItensEstoque = produtos.reduce( (total, produto) => {
//  return total + produto.estoque;
//}, 0);

//const retornaDataLimite = (data) => {
//  const dataLimite = new Date(data);
//  dataLimite.setMonth(dataLimite.getMonth() + 2);
//  return ( dataLimite );
//}