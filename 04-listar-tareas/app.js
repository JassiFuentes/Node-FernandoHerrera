import colors from 'colors';

import { 
    inquirerMenu, 
    pausa,
    leerInput,
    deleteListTasks,
    confirmar,
    mostrarListadoChecklist
} from './helpers/inquirer.js';

import { saveDB, readDB } from './helpers/saveFiles.js';

import { Tasks } from './models/tasks.js';


const main = async() => {

    //ciclo//
    let opt = '';
    //instancia de las tareas
    const tareas = new Tasks();

    const tareasDB = readDB();

    if (tareasDB) {//cargar tareas
        tareas.loadTasksFromArray( tareasDB)
    }


    do{
        //imprime el menu
        opt = await inquirerMenu();
        // console.log({opt});

        //para listar tareas
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion:')
                tareas.createTask(desc)

            break;
            case '2':
                tareas.completeList()
            break;
            case '3':
                //listar completadas
                tareas.listPendingCompleted(true)
            break;
            case '4':
                //listar pendientes
                tareas.listPendingCompleted(false)
            break;
            case '5': //Completado|pendiente
                const ids = await mostrarListadoChecklist( tareas.listadoArr)
                tareas.toggleCompletadas( ids);
            break;
            case '6':
                //borrar
                const id =  await deleteListTasks ( tareas.listadoArr );

                if( id !== '0') {
                    const confirmarDelete = await confirmar('¿Esta seguro?')
                    // console.log({ confirmarDelete });
    
                    if (confirmarDelete) {
                        tareas.deleteTask(id)
                        console.log('Tarea borrada exitosamente'.cyan)
                    }

                }

            break;
        }

        saveDB( tareas.listadoArr );
        



        //para que no se ejecute cuando el usaurio haga cero, hago una evaluacion
        // if ( opt !== '0') {
        
        
        await pausa();

        // }
        
    //retorna una opcion del menu
    } while( opt !== '0');


    // pausa();
}

main();