const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável ✅
// Remova o último valor de comidas e coloque em uma variável ✅
// Adicione 'Arroz' ao final da array ✅
// Adicione 'Peixe' e 'Batata' ao início da array ✅

const v1 = comidas.shift();
const v2 = comidas.pop();
comidas.unshift('Peixe', 'Batata');
comidas.push('Arroz');
console.log(comidas);
console.log(v1, v2);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética ✅
// Inverta a ordem dos estudantes ✅
// Verifique se Joana faz parte dos estudantes ✅
// Verifique se Juliana faz parte dos estudantes 
 
console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(estudantes.includes('Julia'));
console.log(estudantes.includes('Juliana'));


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
console.log(html);
html = html.split('section');
console.log(html);
html = html.join('ul')
console.log(html);
html = html.split('div');
console.log(html);
html = html.join('li');
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carroCopy = carros.slice();
console.log(carros.pop());
console.log(carroCopy);