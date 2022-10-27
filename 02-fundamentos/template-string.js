
const nombre = 'Deadpool';
const real = 'Wade Winston';

const normal = nombre + '' + real;

console.log(normal);  

//como hacer concatenaciones en js con template string

//Dentro del ${} puedes ejecutar cualquier expresion js
const template = `${ 1 + 1 } ${ nombre }  ${ real } Jassira Fuentes`;
console.log(template);  

const html = `
<h1>Hola</h1>
<p>Mundo!</p>
`;

console.log(html); 