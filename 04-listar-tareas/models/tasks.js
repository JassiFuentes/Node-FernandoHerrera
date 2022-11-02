import { Task } from "./task.js";

export {Tasks};

/**
 * _listado:
 *      {'uuid'-12321343-3: {id:!2, desc:asd, completadoEn:123456}},
 * 
 * 
 */

class Tasks {

    _listado = {};

    //retorna un nuevo arreglo con get, el arreglo lo lleno mediante el object
    get listadoArr() {
        const listado = [];
        //metodo para obtener las llaves del _listado
        //forEach recibe una llave del arreglo
        Object.keys(this._listado).forEach( key => {
            //insertar tareas al listado
            const tarea = this._listado[key];
            listado.push(tarea)
        } );

        return listado
    }

    constructor(){
        this._listado = {};
    }

    deleteTask( id = '') {
        if ( this._listado[id]) {
            delete this._listado[id];
        }
    }

    loadTasksFromArray ( tareas = [] ) {

        //con el foreach tengo una tarea de manera independiente 
        tareas.forEach( tarea => {
            //extraigo id, lo establezco en el objetoy luego lo igual a la tarea
            this._listado[tarea.id] = tarea;
        });

    }


    createTask( desc = '') {
        const tarea = new Task(desc);
        this._listado[tarea.id] = tarea;

    }

    completeList () {
        console.log();
        this.listadoArr.forEach( (tarea, index) => {
            const idx = `${index + 1}`.green;
            const { desc, completadaEn } = tarea; 
            const estado = ( completadaEn )
                                ? 'Complatada'.green
                                : 'Pendiente'.red;
            
            console.log(`${ idx } ${ desc} :: ${ estado }`);

        })
    }

    //listarpendientecompletadas
    listPendingCompleted ( completadas = true) {

        console.log();
        let indice = 0;
        this.listadoArr.forEach( tarea => {

            const { desc, completadaEn } = tarea; 
            const estado = ( completadaEn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            
            if (completadas){
                // completada
                if ( completadaEn) {
                    indice += 1
                    console.log(`${ (indice + '.').green }. ${ desc} :: ${ completadaEn.green }`);

                }
            } else {
                //pendiente
                if ( !completadaEn) {
                    indice += 1
                    console.log(`${ (indice + '.').green }. ${ desc} :: ${ estado }`);

                }
            }
        })
    }

    toggleCompletadas( ids = []) {
        ids.forEach( id =>{
            //extraer pdad por id
            const tarea = this._listado[id];
            if ( !tarea.completadaEn) {
                tarea.completadaEn = new Date().toISOString()

            }
        })

        this.listadoArr.forEach( tarea => {

            if (!ids.includes(tarea.id)){
                this._listado[tarea.id].completadaEn = null;
                // const tarea = this._listado[id];
                // tarea.completadaEn = null;
            }
        })
    }

}