// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const menuClone = menu.cloneNode(true);
const copy = document.querySelector('.copy')
copy.appendChild(menuClone)



// Selecione o primeiro DT da dl de Faq
//mminha resolução
const dl = document.querySelector('.faq-list')
const primeiroDT = dl.children[0]
console.log(primeiroDT.innerHTML)



// do mestre
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt');
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD)

// Selecione o DD referente ao primeiro DT
//minha
const primeiroDD = dl.children[1]
console.log(primeiroDD.innerHTML)

//do mestre
const firstDD = primeiroDt.nextElementSibling;
console.log(firstDD)


// Substitua o conteúdo html de .faq pelo de .animais


const animais = document.querySelector('animais')

faq.innerHTML = animais.innerHTML