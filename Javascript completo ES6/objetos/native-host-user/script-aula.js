// Liste 5 objetos nativos
// #1 ARRAY
// #2 STRING
// #3 DATE
// #4 NUMBER
// #5 OBJECT



// Liste 5 objetos do browser
// #1 WINDOW
// #2 Document
// #3 FETCH
// #4 HTMLCollection
// #5 NodeList
// #6 Lenght



// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if(typeof document.webkitVisibilityState !== "undefined"){
    console.log('Existe');
}   else{
    console.log('Não existe')
}
