
import inquirer from 'inquirer'; 
import colors from 'colors';


export {inquirerMenu, pausa, leerInput, listarLugares, confirmar, mostrarListadoChecklist};


const preguntas = [
    {    
        type: 'list',
        name: 'opcion',
        message: '¿Que desea Hacer?',
        //posibles opciones
        choices: [
            {
                value: 1,
                name: '1. Buscar Lugar del Mundo'
            },
            {
                value: 2,
                name: '2. Historial'
            },
            {
                value: 0,
                name: '0. Salir'
            },
        ]

    }
];

const inquirerMenu = async() => {

    console.log('====================='.cyan);
    console.log('Seleccione una opcion'.bgCyan.black);
    console.log('=====================\n'.cyan);

    //no poner entre corchetes el arreglo preguntas, desestrucutrar el objeto para obtener solo el valor
    const { opcion }  = await inquirer.prompt(preguntas);

    return opcion;

};

const pausa = async() =>{
    
    const question =  [
        {
            type: 'input',
            name: 'pause',
            message: `Presione ${'ENTER'.cyan} para continuar`
    
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if ( value.length === 0) {
                    return 'Por favor ingrese un valor'.red;                    
                }
                return true;
            }

        }
    ]

    const { desc} = await inquirer.prompt(question); 
    return desc;
};

//recibo el arreglo de lugares con lo que necesito mostrar al usurio y un indice
const listarLugares = async( lugares = [] ) => {

    const choices = lugares.map( (lugar, index) => {

        const idx = `${index + 1}.`.green;

        return {
            value: lugar.id,
            //.nombre esta en mi metodo ciudad en el search
            name: `${idx} ${ lugar.nombre }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0. '.green + 'Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione un lugar:',
            choices
        }
    ]
    //solo muestro el id
    const { id }  = await inquirer.prompt(preguntas);
    return id;

}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
        
    ];
    const { ok }  = await inquirer.prompt(question);
    return ok

};

const mostrarListadoChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, index) => {

        const idx = `${index + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${ tarea.desc }`,
            checked: ( tarea.completadaEn ) ? true : false
        }
    });    

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]

    const { ids }  = await inquirer.prompt(pregunta);
    return ids;

}









