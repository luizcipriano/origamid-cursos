// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll('img');
console.log(todasImg)




// Retorne no console apenas as imagens que começaram com a palavra imagem

const todasImg1 = document.querySelectorAll('[src^="img/imagem"]')
console.log(todasImg1)


// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos);


// Selecione o primeiro h2 dentro de .animais-descricao

const h2 = document.querySelector('.animais-descricao h2')
console.log(h2.innerText)


// Selecione o último p do site
const todosP = document.querySelectorAll('p')
console.log(todosP[--todosP.length]);


const lastP = document.querySelector('.copy p')
console.log(lastP);


 