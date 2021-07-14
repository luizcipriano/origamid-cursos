// Adicione a classe ativo a todos os itens do menu
const menuAtivo = document.querySelectorAll('.menu a')
menuAtivo.forEach((item) => {
    item.classList.add('ativo')
    console.log(item.classList)
})  
console.log(menuAtivo)


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuAtivo.forEach((item, index) =>{
    if(index > 0){
        item.classList.remove('ativo')
    }
    console.log(item.classList)
})

// Verifique se as imagens possuem o atributo alt

const img = document.querySelectorAll('img');

img.forEach((item) => {
    console.log(item.hasAttribute('alt'))
})

// Modifique o href do link externo no menu
const externo = document.querySelector('.menu [href^="https://"]')
externo.setAttribute('href', 'https://www.youtube.com/watch?v=lxRaKyl5WLc')

console.log(externo)

