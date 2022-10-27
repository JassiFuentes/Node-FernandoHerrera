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

//crear funcion que permita  traer la información de un empleado
const getEmpleado = ( id, callback ) => {
    // extraer empleado del arreglo quiero que regrese un emleado que coincida con ese id
    //el .find me pasea cada objeto de mi arreglo
    const empleado = empleados.find( e => e.id === id);

    //para cuando el id del empleado no existe uso else
    if ( empleado ) {
        //el null corresponde a que no hay error
        //solo me interesa el nombre, tambien podrias hacerlo con el sigo ?.nombre
        callback(null, empleado.nombre);
        // return empleado;
    } else {
        callback(`El empleado  con id ${ id } no existe`);
    }

}


const getSalario = ( id, callback) => {
    //con el find obtengo un salario de los de mi arreglo que cumpla la condicion: que el idsea igual al que recibo como argumento
        //el signo ? pregunta si existe o wur no regresa undefine o null, si es asi ejecuta lo que sigue
    const salario = salarios.find( s => s.id === id )?.salario;
    if ( salario ) {
        callback(null, salario);
    } else {
        callback(`No hay salario para mostrar  para el id ${ id }`);
    }

}

// console.log( getEmpleado( 6 ) );

//como ya paso el id puedo obtener ese empleado, pero este callback debe existir como argumento arriba
// getEmpleado( 3, ( empleado) =>{
//     console.log(empleado)
// })

const id = 3;

//voy a recibir primero un error en caso de notener error recibo el argumento de empleado

getEmpleado( id, ( err, empleado) =>{
    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }
    // //no tengo error, confio en que tengo empleado
    // console.log('Empleado Existe!');
    // console.log(empleado.nombre);

    getSalario(id, (err, salario) => {
        if( err ) {
            return console.log(err);
        }
        //si existe imprimo, llego a leer la variable empleado dentrp del scope
        console.log('El empleado:', empleado, 'tiene un salario de:', salario );
    })
})


// getSalario(id, (err, salario) => {
//     if( err ) {
//         return console.log(err)
//     }
//     console.log('Salario Asignado!');
//     console.log(salario)
// })


