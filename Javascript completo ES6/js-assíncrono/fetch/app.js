// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar


const ul = document.querySelector('ul');

function buscar(){
  const cep = document.getElementById('cep').value;
  console.log(cep);
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(cep => {
    const bairro = cep.bairro;
    const rua = cep.logradouro;
    const cidade = cep.localidade;
    const uf = cep.uf;
    const bairro2 = document.createElement('div');
    const rua2 = document.createElement('div');
    const cidade2 = document.createElement('div');
    const uf2 = document.createElement('div');

    const textBairro = document.createTextNode(`${rua}`);
    bairro2.appendChild(textBairro);
    document.querySelector('.bairro').appendChild(bairro2);


    const textRua = document.createTextNode(`${rua}`);
    rua2.appendChild(textRua);
    document.querySelector('.rua').appendChild(rua2);

    const textCidade = document.createTextNode(`${cidade}`);
    cidade2.appendChild(textCidade);
    document.querySelector('.cidade').appendChild(cidade2);

    const textUf = document.createTextNode(`${uf}`);
    uf2.appendChild(textUf);
    document.querySelector('.uf').appendChild(uf2);
    

    bairro2.innerHTML = bairro;
    rua2.innerHTML = rua;
    cidade2.innerHTML = cidade;
    uf2.innerHTML = uf;

  });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector('.bitcoin');
function fetchBTC () {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcBRL =>{
   btcDisplay.innerText = ('R$ ' + btcBRL.BRL.buy).replace('.', ',');
   
  })
}
fetchBTC();

setInterval(fetchBTC, 30000)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const jokeDisplay = document.querySelector('.joke');
function fetchChuck(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(joke =>{
    jokeDisplay.innerText = (joke.value);
  })
};
fetchChuck();