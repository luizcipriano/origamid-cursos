// var possuiGraduacao = true;

// if (possuiGraduacao) {
//     console.log('é verdadeiro')
//     var x = 10;
// } else {
//     console.log('é falso')
// }

// /////////////////////////////////

// if ((5 - 5 ) && (5 + 5)){
//     console.log('Verdadeiro')
// }else {
//     console.log('Falso');
// }

// let condicional = (5 + 5) || (5 + 5) || (10 - 2);
// console.log(condicional)

// // Verifique se a sua idade é maior do que a de algum parente
// // Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

    let idade = 23;
    let idadeParente = 54;

    if(idade > idadeParente) {
        console.log('é maior')
    }else if(idade === idadeParente){
        console.log('é igual')
    }else{
        console.log('é menor')
    }
     
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(`O valor da expressão é ${expressao}`)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idadi = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idadi, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log(brasil === china)

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//Aparecera 'Falso' , pois Gato != gato então o operador logico && ira parar na primeira verificação que é falsa

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Aparecera Cão, que é a ultima condição verdadeira