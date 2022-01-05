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

/******************************************************
console.log('\n');
const dataHoje = new Date();
const validade = new Date();

const mesAtual = dataHoje.getMonth();
validade.setMonth( mesAtual + 6 );

console.log(validade.toLocaleDateString());

******************************************************/
console.log('\n');
const inverteMesDia = (mesDia) => {
  const dataInvertida = mesDia.split('/');  
  return  dataInvertida[1] + '/' + dataInvertida[0];
}

let dia = new Date();

console.log(inverteMesDia(dia.toLocaleDateString()));

/*******************************************************/
console.log('\n');
console.log('\n');
const dataHoje = new Date();
const validade = new Date();

const mesAtual = dataHoje.getMonth();
validade.setMonth( mesAtual + 6 );

const options = {
  dataStyle : "short"//, 
  //dataStyle: "long"-- nao identifiquei o que utilizar aqui
};

console.log(validade.toLocaleString('pt-br', options));
