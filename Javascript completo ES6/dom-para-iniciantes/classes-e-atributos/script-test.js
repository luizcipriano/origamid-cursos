const menu = document.querySelector('.menu');

menu.classList.add('ativo')
menu.classList.toggle('azul')
menu.classList.toggle('azul')
menu.classList.toggle('azul')


if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul')
}

menu.className += ' vermelho'

console.log(menu);

