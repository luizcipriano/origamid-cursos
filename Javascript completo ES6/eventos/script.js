// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');


function ativaLink(event) {
    event.preventDefault();
    links.forEach((link)=>{
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
};


links.forEach((link)=> {
    link.addEventListener('click', ativaLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const geral = document.querySelector('body *')

function quemEh(event){
    const currentTarget = event.target;
    console.log(currentTarget);
}

geral.addEventListener('click', quemEh);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


function remover(event){
    const target = event.target;
    target.remove()
}

geral.addEventListener('click', remover);

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function aumentarFonte(event){
    if(event.key === 't'){
        document.body.classList.toggle('font')
    }
}

window.addEventListener('keydown', aumentarFonte)
