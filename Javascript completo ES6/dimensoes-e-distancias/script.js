// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector('img')
console.log(firstImg.offsetTop)

const lastImg = document.querySelector('.contato img')
const imgWidth2 = lastImg.clientWidth
const imgWidth = firstImg.clientWidth
console.log((imgWidth * 6) + imgWidth2);

// Retorne a soma da largura de todas as imagens









// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)




// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
