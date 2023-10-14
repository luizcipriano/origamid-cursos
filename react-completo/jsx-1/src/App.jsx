
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};



const App = () => {
  const dados = mario;

  return (
  <>
    <h2>Nome: {dados.cliente}</h2>
    
    <h2>Idade: {dados.idade}</h2>

    <h2>Situação: <span style={{ color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span> </h2>

    <h2>Total gasto: {dados.compras.reduce((total, compra) => total + parseFloat(compra.preco.replace('R$ ', '')), 0)}</h2>

    <h3 style={{ display: dados.compras.reduce((total, compra) => total + parseFloat(compra.preco.replace('R$ ', ''), 0), 0) > 10000 ? 'block' : 'none' }}>
    Ta gastando muito em, passou dos 10k esse mês
    </h3>

  </>
  ) 
};

export default App; 