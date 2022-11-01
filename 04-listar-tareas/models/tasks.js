import { Task } from "./task";

export {Tasks};

/**
 * _listado:
 *      {'uuid'-12321343-3: {id:!2, desc:asd, completadoEn:123456}},
 * 
 * 
 */

class Tasks {

    _listado = {};

    constructor(){
        this._listado = {};
    }


    createTask( desc = '') {
        const tarea = new Task(desc);
        this._listado[tarea.id] = tarea;

    }

}