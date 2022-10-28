//importacion fs, todo lo necesatio para grabar un archivo

const fs = require('fs');


//funcion para crear archivos de multiplicar
//convertirla en funcion asyn que por defecto maneja una promesa
const crearArchivo = async( base = 5) => {
    //enbarcar el try y catch para manejar en caso de errores
    try {
        console.log(' Tabla del:', base );
    
        let salida = '';
        for( let i = 1; i<=10; i++) {
            salida +=(`${base} x ${ i } = ${ base * i }\n`);
        }
    
        console.log(salida);
        
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
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