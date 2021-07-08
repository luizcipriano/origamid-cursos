let  pessoa = {
    nome : 'Luiz',
    idade :23,
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

let quadrado = {
    lados : 4,
    area : function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}


console.log(quadrado.area(6));
console.log(quadrado.perimetro(5));


////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log(Math.random())

let menu = {
    with: 800,
    height: 50,
    backgraoundColor: '#000',
    metadeHeight(){
        return this.height / 2;
    }
}

menu.backgraoundColor = '#fff';
menu.color = 'blue';

menu.esconder = function(){
    console.log('Escondi')
}

let bg = menu.backgraoundColor;