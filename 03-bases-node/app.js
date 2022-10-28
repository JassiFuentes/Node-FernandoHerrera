//desestructurar el objeto recido de multiplicar.js
const { crearArchivo } = require('./helpers/multiplicar');


//limpia la consola automaticamente
console.clear();//no funciona para todas las consolas
process.stdout.write('\033c');//funciona para cmd


// console.log(process.argv);// imprime lo arg de consola

//desustructura el arreglo obtenido por consola y asignarle un nombre
const [ , , arg3 = 'base=5' ] = process.argv;
//desestructurar el arg3 con ayuda del .split que me los separa  el string por el = y ahora obtengo dos elementoa
const [ , base = 5 ] = arg3.split('=');
// console.log( base );









//usar ciclo for para tabla del 5
// const base = 5;

// for( let i = 1; i<=10; i++) {
//     console.log(`${base} x ${ i } = ${ base * i }`);
// }


//crando el archivo

// const base = 3;
// console.log(`tabla del ${base}`);



// let salida = '';

// for( let i = 1; i<=10; i++) {
//     //forma de ir aacumulando y concatenar de forma resumida
//     //salto de linea \n
//     salida +=(`${base} x ${ i } = ${ base * i }\n`);
// }

// console.log(salida); //todo bien vamos a grabarlo

// //grabando el archivo con ayuda de la importacion fs dada por node
// //recibe nombre del archivo, la salida que cree para el for, y el manejo de errores
// // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
// //     if (err) throw err;

// //     console.log(`tabla-${base}.txt creado`);
// // })

// //archivo creado

// //usando la forma asicrona, se ejecuta si no hay errores, para atrapar los errores debemos envolverlo en un try y un catch

// fs.writeFileSync(`tabla-${base}.txt`, salida);

//     console.log(`tabla-${base}.txt creado`);



//comente para pasar el codigo aun nuevo archivo y este quede limpio, ahora necesito llamar ese archivo

crearArchivo( base )
    //toma los nombre del archivo dentro de enta pdad nombreArchivo
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch((err) => console.log (err));








