//Funcion tadicional

// function sumar( a, b = 10 ) {
//     return a + b;
// }

//transforma a una funcion flecha

const sumar = (a, b) => {
    //saco a yb de sus argumentos
    return a + b ;
}

//eso de arriba equivale a : ya que devuelve una sola linea y es el return
// const sumar = (a, b) => a + b ;


//ejecutamos la funcion mandando los argumentos
console.log( sumar( 5, 10 ) );

//una funcion que no necesita argumnetos
const saludar = ( ) => 'Hola mundo';
//llamo a la funcion()
console.log( saludar());
