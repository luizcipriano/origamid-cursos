const imgs = document.querySelectorAll('img')



imgs.forEach(function(item, index, array){
    console.log(item, index, array)
});



const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item, index, array){
//   console.log(item, index, array);
// });
// MESMO CODIGO AGORA IMPLEMENTANDO O ARROW FUNCTION

titulosArray.forEach((item, index, array) => {
    console.log(item, index, array)
});
