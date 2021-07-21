function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function () {
        return ' Abraçou';
    }    
}

Pessoa.prototype.andar = function(){
    return 'Pessoa andou';
}

const luiz = new Pessoa('Luiz', 23);



// console.log(Pessoa.prototype)
// console.log(luiz.prototype)

const pais = 'Brasil'
const cidade = new String('Rio de Janeiro');


const listaAnimais = ['Cachorro', 'Gato', 'Galinha'];


const lista = document.querySelectorAll('li')

const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista)