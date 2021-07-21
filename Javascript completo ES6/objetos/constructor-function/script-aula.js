//OBJETOS
const carro = {
    marca: 'Marca',
    preco: 0,
  }
  
  const honda = carro;
  honda.marca = 'Honda';
  honda.preco = 4000;
  
  const fiat = carro;
  fiat.marca = 'Fiat';
  fiat.preco = 3000;
  


  //CONSTRUCTOR FUNCTIONS
  function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
  }
  
  const honda = new Carro();
  honda.marca = 'Honda';
  honda.preco = 4000;
  const fiat = new Carro();
  fiat.marca = 'Fiat';
  fiat.preco = 3000;
  



  //NEW KEYWORD
  const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}



//PARÂMETROS E ARGUMENTOS
function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
  }
  
  const honda = new Carro('Honda', 4000);
  const fiat = new Carro('Fiat', 3000);

  

  //THIS KEYWORD
  function Carro(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
    console.log(this);
  }
  
  const honda = new Carro('Honda', 2000);

  
  //EXEMPLO REAL
  const Dom = {
    seletor: 'li',
    element() {
      return document.querySelector(this.seletor);
    },
    ativo() {
      this.element().classList.add('ativo');
    },
  }
  
  Dom.ativo(); // adiciona ativo ao li
  Dom.seletor = 'ul';
  Dom.ativo(); // adiciona ativo ao ul

    
  
  //CONSTRUCTOR FUNCTION REAL
  function Dom() {
    this.seletor = 'li';
    const element = document.querySelector(this.seletor);
    this.ativo = function() {
      element.classList.add('ativo');
    };
  }
  
  const lista = new Dom();
  lista.seletor = 'ul';
  lista.ativo();
  
  const lastLi = new Dom();
  lastLi.seletor = 'li:last-child';
  lastLi.ativo();

  
  //LEMBRE-SE DE USAR PARÂMETROS
  function Dom(seletor) {
    const element = document.querySelector(seletor);
    this.ativo = function(classe) {
      element.classList.add(classe);
    };
  }
  
  const lista = new Dom('ul');
  lista.ativo('ativo');
  
  const lastLi = new Dom('li:last-child');
  lastLi.ativo('ativo');
  