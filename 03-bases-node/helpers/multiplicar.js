//importacion fs, todo lo necesatio para grabar un archivo

const fs = require('fs');
const colors = require('colors');



//funcion para crear archivos de multiplicar
//convertirla en funcion asyn que por defecto maneja una promesa
const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
    //enbarcar el try y catch para manejar en caso de errores
    try {    
        let salida, consola = '';

        for( let i = 1; i<=hasta; i++) {
            salida +=`${base} x ${ i } = ${ base * i }\n`;
            consola +=(colors.bgBlue(`${base} ${'x'.cyan} ${ i } ${'='.green} ${ base * i }\n`));

        }
        
        if (listar){
            console.log(' Tabla del:'.green, colors.blue(base ));
            console.log(consola);

        }
        
        //crear archivo
        fs.writeFileSync(`./outs/tabla-${base}.txt`, salida);
    
        return(`tabla-${base}.txt`);
        
    } catch (err) {
        throw err;
        
    }

}

//necesito llamar este archivo desde el app.js

//exportando la funcion sera tratada como objeto creo una funcion que apunta a crear arhivo

module.exports = {
    // crearArchivo: crearArchivo //redundante puedo simplificar
    crearArchivo
}