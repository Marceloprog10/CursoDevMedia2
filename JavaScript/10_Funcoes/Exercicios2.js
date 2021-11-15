
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
/*----------------------------------------------------------*/