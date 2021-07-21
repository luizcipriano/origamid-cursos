// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}
const luiz = new Pessoa('Luiz', 'Cipriano', 23)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

const nodelist = Object.getOwnPropertyNames(NodeList.prototype)

const html = Object.getOwnPropertyNames(HTMLCollection.prototype)
const doc = Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // "HTMLLIElement"
li.click; // "Function"
li.innerText; // "String"
li.value; //number
li.hidden; // "Boolean"
li.offsetLeft; // "Number"
li.click(); // Null or undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
