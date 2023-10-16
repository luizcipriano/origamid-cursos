import React from 'react';
import Produtos from './components/produtos';
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const  pathname  = window.location;

let page = false;

function checkPage() {
  if (pathname.pathname === '/produtos') {
    page = true;
  } else {
    page = false;
  }
}

const App = () => {



  return <section>
      <ul>
        <li><a onClick={checkPage()}  href="/">Home</a></li>
        <li><a  onClick={checkPage()} href="/produtos">Produtos</a></li>
      </ul>

    <div className={page ? 'd-none' : 'd-block'} >
    <h1 style={{ color: 'green' }}>Home</h1> 
    <p>Essa é a home</p>
    </div>
    {page ? <Produtos /> : null} 

  </section>;
};


export default App; 
