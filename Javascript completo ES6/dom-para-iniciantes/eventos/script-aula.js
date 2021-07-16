const img = document.querySelector('img')

function callback(){
    img.classList.add = 'ativo'
} 

img.addEventListener('click', callback)