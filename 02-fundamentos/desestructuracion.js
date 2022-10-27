const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    // edad: 50,
    //metodo puedes usar  los dos puntos luego de l getnombre y la palabra function adelante de los (), pero equivale a esto funcionan igual
    getNombre() {
        //colocar this. para llamar a las otras pddes
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }

}

//colocar los() para llama al metodo
// console.log (deadpool.getNombre());


//extraer las variable del objeto

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder= deadpool.poder;

//Desestructuracion: tambien puedes agregar nvos valores como edad, se imprime el definido en el scope

// const { nombre, apellido, poder, edad = 0 } = deadpool


//imprimir cada uno de los valore extraidos
// console.log(nombre, apellido, poder, edad);


//otro uso, con function

// function ImprimeHeroe( heroe) {
//     const { nombre, apellido, poder, edad = 0 } = heroe;
//     console.log(nombre, apellido, poder, edad);
    
// }

// //le paso como argumento a deadpool
// ImprimeHeroe ( deadpool );


//Puedo desestructurar el objeto directamente en los argumentos, envoviendolo entre llaves, y asignarle nvos valores:

function ImprimeHeroe( { nombre, apellido, poder, edad = 0 }) {

    //Puedes cambiar tambien los valores al menos que lo definas como una const
    nombre = 'Jassira'
    console.log(nombre, apellido, poder, edad);
    
}

// ImprimeHeroe ( deadpool );


//Desestructurar arreglos

const heroes = ['Deadpool', 'Superman', 'Batman'];

// //quiero el heroe de la posicion 1,2,3
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

//Desestructuracion para extraer variables, de forma simplificada

const [ h1, h2, h3 ] = heroes;

console.log(h1, h2, h3);

// Si solo te interesa una posicion en concreto deja espacios vacios seguido de coma

const [ , , solobatman ] = heroes;

console.log(solobatman);