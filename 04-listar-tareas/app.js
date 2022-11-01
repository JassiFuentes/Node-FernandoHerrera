import colors from 'colors';

import { inquirerMenu, pausa } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';


const main = async() => {
    console.log('Hola Mundo');

    //ciclo//
    let opt = '';
    const tareas = new Tasks();
    do{
        opt = await inquirerMenu();
        // console.log({opt});

        //para listar tareas
        switch (opt) {
            case '1':
                
                break;
            case '2':
                console.log(tareas._listado);
        }
        



        //para que no se ejecute cuando el usaurio haga cero, hago una evaluacion
        // if ( opt !== '0') {
        
        
        await pausa();

        // }
        
    } while( opt !== '0');


    // pausa();
}

main();