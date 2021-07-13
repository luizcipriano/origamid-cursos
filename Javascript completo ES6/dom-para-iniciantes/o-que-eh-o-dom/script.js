// Retorne o url da página atual utilizando o objeto window
const atual =  window.location.href;
console.log(`A pagina atual é ${atual}`)


// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiro = document.querySelector('.ativo')


// Retorne a linguagem do navegador

const lingua = navigator.language
console.log(`a linguagem do navegador é ${lingua}`)

// Retorne a largura da janela

const largura = window.screen.width
const largura2 = window.screen.availWidth
const largura3 = window.innerWidth

console.log(`A largura da pagina totalmente cheia é ${largura}, o tamanho atual dela é ${largura3} `)