let nombre = 'wolverine'
const nombre1 ='Jass'


//creamos otra variable llamada nombre dentro del scope si quiero ver esa variable debo crear alli un console.log, es como que nada de lo que esta aqui s eencuentra afuera
if (true){
    let nombre = 'Magneto';
    const nombre1  = 'Carmen';

    console.log(nombre1)
}

// si no declaro la variable let en el scope {}if, este saldra y buscara esa variable afuera para asignarle el nuevo valor

console.log(nombre);