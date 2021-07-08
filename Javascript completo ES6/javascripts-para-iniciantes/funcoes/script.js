// Crie uma função para verificar se um valor é Truthy
function verificar(dado) {
    return !!dado
}
console.log(verificar('testando'));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
    let total = lado * 4
    return total
}
console.log(perimetro(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    let nomeSobrenome = `Seu nome todo é ${nome} ${sobrenome}`
    return nomeSobrenome
}
console.log(nomeCompleto('luiz','cipriano'))

// Crie uma função que verifica se um número é par
function ehPar(numero) {
    if (numero % 2 === 0){
        return 'é par'
    }else{
        return 'é ímpar'
    }
}


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoAssim(verificar) {
    return typeof verificar
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.



addEventListener('click',function(){console.log('Luiz Cipriano')})

// Corrija o erro abaixo

function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de 193 países`;
  }
  precisoVisitar(20);
  jaVisitei(20);