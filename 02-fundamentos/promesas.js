const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

// const getEmpleado = ( id, callback ) => {

//     const empleado = empleados.find( e => e.id === id )?.nombre

//     if ( empleado ) {
//         callback( null, empleado );
//     } else {
//         callback(`Empleado con id ${ id } no existe`);
//     }
// }
//voy a transformar lo de arriba en una promesa



//ya no ocupo el callback
// const getEmpleado = ( id ) => {

//     //la promesa recibe el callback, y el callback recibe 2 argumentos:resolve, reject
//     const promesa = new Promise(( resolve, reject ) => {
//         //ejecutare la funcion para buscar al empleado dentro del arreglo y lo evaluare
//         const empleado = empleados.find( e => e.id === id )?.nombre

//         if ( empleado){
//             //si existe mando el resolve
//             resolve ( empleado);
//         } else {
//             //si no exito llamos el reject
//             reject ( `No existe empleado con id ${id}`)
//         }
//     });

//     //no olvidar retornar promesa para que funcione
//     return promesa;


// }



//Simplificar el codigo no usando la const promesa ni su return solo retornado la nueva promesa, en vez de if uso ternario ? :

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);

    });
}

// Promesa que regresa el salario del empleado
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario) ? resolve(salario) : reject(`No hay salario para el id ${id}`);
    });

}



const id = 3;

// getEmpleado(id)
// // .then si existe el empleado quiero imprimirlo, el then sería cuando se resuelva voy a tener un empleado que es lo que el resolver esta regresando.
// .then( empleado => console.log(empleado))
// //manejar errores con cach cuando suceda, entrara en el caso reject
// .catch ( err => console.log(err) );


// getSalario(id)
//     .then( salario => console.log(salario))
//     .catch( err => console.log(err) );



//una forma mejor y simplificada pero sigue siendo feo igual
// getEmpleado(id)
//     .then(empleado => {
//         //ejecuta esto si se resuelve
//         //hago peticion al getSalario
//         getSalario(id)
//             .then(salario => {
//                 console.log('El empleado', empleado, 'tiene un salario de', salario)
//             })
//             //manejarel error
//             .catch(err => console.log(err));
//     })
//     //tambien debo manejar el error aqui, cuando no entre en el .then es decir no exista un empleado
//     .catch( err => console.log(err) );



//haciendolo de la forma promesa en cadena

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id ) 
    })
    .then( salario => console.log( 'El empleado:', nombre, 'tiene un salario de:', salario ))
    .catch( err => console.log( err ) );





