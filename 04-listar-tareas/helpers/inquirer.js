
import inquirer from 'inquirer'; 
import colors from 'colors';


export {inquirerMenu, pausa};


const preguntas = [
    {    
        type: 'list',
        name: 'opcion',
        message: '¿Que desea Hacer?',
        //posibles opciones
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3.Listar Tarea Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tarea(s)'
            },
            {
                value: '0',
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

const leerInput = async() => {
    const question = [{
        
    }]
}





