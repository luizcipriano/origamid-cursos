// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector('img')
console.log(firstImg.offsetTop)

// Retorne a soma da largura de todas as imagens

function somaImagens(){
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem)=>{
        soma += imagem.offsetWidth
    });
    console.log(soma)
}

window.onload = function(){
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')
links.forEach((link) => {
    const linkHeight = link.offsetHeight
    const linkWidth = link.offsetWidth
    if(linkHeight >= 48 && linkWidth >= 48){
        console.log(link, 'Possui boa acessibilidade')
    }else{
        console.log(link,'Não possui boa acessibilidade')
    }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu')

const menor = window.matchMedia('(max-width: 720px)')

if (menor.matches) {
        menu.classList.toggle('menu-mobile')
        console.log('é mobile')
}else{
    menu.classList.remove('menu-mobile')
    console.log('é desktop')
}