
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {

  const produtoMaior = produtos.map((produto, item) => {
     return Number(produto.preco.replace('R$', '')) > 1500 ? <div>
       <h1><strong>{produto.nome}</strong></h1>
       <p>{produto.preco}</p>
       <ul>
         {produto.cores.map((cor, index) => {
           return <li style={{ backgroundColor: cor , color: 'white'}} key={index}>{cor}</li>;
         })}
       </ul>
     </div> : null;
  });

  return <section>

    <h1>Produtos mais caros que R$ 1500:</h1>
    {produtoMaior}
  </section>;
};


export default App; 