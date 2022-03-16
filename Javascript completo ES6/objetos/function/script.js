// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const total = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  // console.log(item.innerHTML.length)
  return acumulador + item.innerHTML.length
}, 0)

// console.log(total)
// console.log(paragrafos)



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe): '';
  conteudo ? elemento.innerHTML = conteudo : '' ;

  return elemento
}
console.log(criarElemento('li','ativo', 'vlw jamal' ))



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


function titulo(conteudo){
  const titulo = document.createElement('h1');
  titulo.classList.add('titulo');
  conteudo ? titulo.innerHTML = conteudo : '';

  return titulo
}

console.log(titulo('aindaaa'))