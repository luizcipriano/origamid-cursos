function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
  }
  
  mostrarCarro(); // Fusca no console
  console.log(carro); // Erro, carro is not defined
  

  /////////////////////////////////////////

  function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
  }
  
  mostrarCarro(); // Fusca
  console.log(carro); // Fusca

  ////////////////////////////////////////////////////////////

  var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca

////////////////////////////////////////////////////////////

if(true) {
    var carro = 'Fusca';
    console.log(carro);
  }
  console.log(carro); // Carro
  console.log(ano); // erro ano is not defined
  ////////////////////////////////////////////////////////////

  
  