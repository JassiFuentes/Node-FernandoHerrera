
//funcion flecha, recibe como argumento el nombre y su retorno usamos bactics`` nos permite hacer template de string
const saludar = ( nombre ) => {
    let mensaje = `Saludos ${ nombre }`;//equivale a 'Saludos ' + nombre
    return mensaje


}

//equivale a 
// function saludar2 (){

// }

console.log( saludar('Fernado'))// llamas la funcion y le pasas el valor del argumento