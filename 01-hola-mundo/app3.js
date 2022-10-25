
//estoy ejecutando sincronos, es decir instrucciones no bloqueantes
console.log('Inicio de programa');

//usa callback para jecutar un funcion el cierto tiempo
setTimeout(( ) => {
    console.log('Primer timeout');
}, 3000);

setTimeout(( ) => {
    console.log('Segundo timeout');
}, 0);

setTimeout(( ) => {
    console.log('Tercer timeout');
}, 0);

console.log('Fin de programa');