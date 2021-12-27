/***********************************************/
//import verificaMaiorIdade from './conversorMedidas.js';
console.log('\n');

const verificaMaiorIdade1 = (idade) => {
    if (idade > 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}
//console.log(verificaMaiorIdade(10));

const verificaMaiorIdade = (idade) => {
    var resultado = (idade > 18) ? 'Maior de idade' : 'Menor de idade';
    return  resultado;
}
export default verificaMaiorIdade