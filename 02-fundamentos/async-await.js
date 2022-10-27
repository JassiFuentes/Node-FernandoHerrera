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

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);

    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario) ? resolve(salario) : reject(`No hay salario para el id ${id}`);
    });
}


//el await tiene que estar dentro de una function o metodo asincrono
// agrego async para convertirla en una funcion asincrona
//paso id como argumento de la funcion
const getInfoUsuario = async(id) => {

    //forma usual para amanejar errores
    //try se hara si no sucede ningun error
    try {
        // el await se puede usar con una funcion que trabaje con una promesa, recibo el id
        //esta seria la reslocion correcta
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);    
    
        return ` El salario del empleado ${ empleado} es de ${salario}`;
        
    } catch (error) {
        //para caso de error, la promesa que no se logre completar y salir parma manejar el error
        throw error;
        
    }
}

const id= 3;

//llamo a la funcion y con el punto el async me da el then y el cath
//primero se manda el id aca
getInfoUsuario( id )
    .then( msj =>{
        console.log('solo manejar los resolve')
        console.log(msj)
        
    })
    .catch( err => {
        console.log('Hubo un Error')
        console.log(err)
    });
