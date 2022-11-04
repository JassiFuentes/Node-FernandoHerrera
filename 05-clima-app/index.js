import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js"
import { Busquedas } from "./models/search.js";


//imprimir variables de entorno que se encuentran en el process
// console.log(process.env.MAPBOX_KEY)

const main = async() => {

    //nva instacia d ebusqueda
    const busqueda = new Busquedas()
    //alamcena la opcion elegida por el usuario
    let opt;

    do {

        opt = await inquirerMenu();

        switch ( opt) {
            //recibimos el value
            case 1:
                //mostrar mensaje y guardar el lugar que es escriba en la constante lugar
                const buscar = await leerInput('Que lugar desea buscar:');
                 
                //buscar lugares

                //Ref a nuestras busqueda buscar el lugar que mando el ususario
                //almceno la busqueda, lo que devuelva en una constante
                const lugares = await busqueda.ciudad(buscar);

                //Selecionar el lugar 

                //mostrar lista segun el lugar seleccionado uso el inquirer, paso el arreglo de lugares 
                //cual opcion d emi arreglo lugares coincide con el id seleccionado
                const idSeleccionado = await listarLugares(lugares);

                //caso para cancelar con '0' constinuarl el ciclo
                if (idSeleccionado === '0') continue;

                //metodo find de Js me regresa el primer elemento que cumpla la condicion()
                const lugarSel = lugares.find( l => l.id === idSeleccionado)
                //desestructurare para mostarar los resultados ordenadamente
                // console.log(lugarSel)

                //guardar en DB el lugar seleccionado para el historial
                busqueda.agregarHistorial(lugarSel.nombre)

                //Clima

                const clima = await busqueda.climaLugar(lugarSel.lat, lugarSel.long);
                // console.log(clima);

                //Mostrar resultado d edonde viene su informaicon
                console.log('\nInformacion de la ciudad:\n'.green);
                console.log('Ciudad:', lugarSel.nombre.cyan);
                console.log('Lat:', lugarSel.lat );
                console.log('Long:', lugarSel.long );
                console.log('Temperatura:', clima.temp );
                console.log('Mínima:', clima.min );
                console.log('Maxima:', clima.max );
                //uso la desc que regrreso en el metodoclimaLugar
                console.log('Como esta el clima:', clima.desc.cyan);

                break;
        
            case 2:
                //Mostrar Historial, impresion
                busqueda.historialCapitalizado.forEach(( lugar, index) => {
                    const idx =`${ index + 1 }. `.cyan;
                    console.log(`${ idx } ${ lugar }`)
                })

                break;
        }
        if ( opt !== 0 ) await pausa();
        
    } while (opt !== 0);
   
}
main();