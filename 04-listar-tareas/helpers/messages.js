import colors from 'colors';

export { mostrarMenu, pausa};

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.log('====================='.cyan);
        console.log('Seleccione una opcion'.bgCyan.black);
        console.log('=====================\n'.cyan);

        //construir menu//

        console.log(`${'1.'.cyan} Crear Tarea`);
        console.log(`${'2.'.cyan} Listar Tareas`);
        console.log(`${'3.'.cyan} Listar Tarea Completadas`);
        console.log(`${'4.'.cyan} Listar Tareas Pendientes`);
        console.log(`${'5.'.cyan} Completar Tarea(s)`);
        console.log(`${'6.'.cyan} Borrar Tarea(s)`);
        console.log(`${'0.'.cyan} Salir \n`)

        const readline = require('readline').createInterface({
            //esperar una respuesta por parte del usuario
            input: process.stdin,
            //mostarra algun msj al ususario
            output: process.stdout
        });

        //usar y mostrar al usurio con el .question
        readline.question('Seleccione una opcion:', (opt) => {
            //mostar opcion elegida, o respuesta del usuario
            // console.log(opt);
            readline.close();
            resolve(opt);
        })

    });


}

const pausa = () => {

    return new Promise ( resolve => {
        const readline = require('readline').createInterface({
            //esperar una respuesta por parte del usuario
            input: process.stdin,
            //mostarra algun msj al ususario
            output: process.stdout
        });
    
        //usar y mostrar al usurio con el .question
        readline.question(`\nPresione enter ${'ENTER'.cyan} para continuar\n`, (opt) => {
            readline.close();
            resolve(opt);
        })        
    });

}



