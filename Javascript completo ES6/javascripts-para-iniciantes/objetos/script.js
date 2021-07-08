// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let dados = {
    nome : 'Luiz',
    sobrenome : 'Cipriano',
    estado : 'RJ',
    idade : 23,
}
// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function(){
    return `Seu nome completo é: ${this.nome} ${this.sobrenome}` 
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  let cachorro = {
      raca : 'labrador',
      cor  : 'preto'
      idade : 10,
      latir(pessoa){
          if(pessoa === 'homen'){
              return 'Latir';
          }else {
              return 'pede carinho'
          }
      },
  };