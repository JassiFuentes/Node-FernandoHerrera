import { v4 as uuidv4 } from 'uuid';


export {Task};



class Task {

    id = '';
    desc = '';
    completadaEn = null;

    constructor( desc ) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadaEn = null;
    }
}

