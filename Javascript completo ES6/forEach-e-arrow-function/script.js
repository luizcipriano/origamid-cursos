// Mostre no console cada parágrado do site
const allP = document.querySelectorAll('p')
console.log(allP);


// Mostre o texto dos parágrafos no console
const textoP = document.getElementsByTagName('p')
const pArray = Array.from(textoP);

pArray.forEach((item) => {
    console.log(item.innerText)
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++)
});

imgs.forEach(() => i++);

