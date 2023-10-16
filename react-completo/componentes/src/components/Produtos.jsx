import React, { Component } from 'react';
import App from '../App';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

class Produtos extends Component {
  render() {
    return (
      <>
        <h1 style={{ color: 'green' }}>Produtos</h1>
        <ul>
          {produtos.map((produto)=>{
            return <div key={produto.nome}> <h1>{produto.nome}</h1> 
              <ul>
                {produto.propriedades.map((propriedade)=>{
                  return <li key={propriedade}>{propriedade}</li>
                })}
              </ul> 
              </div>
              
          })}
        </ul>
      </>
    );
  }
}


export default Produtos;
