
//funcion que recibe un callback, y se ejecutara luego de 1000ms
// setTimeout(function () {
//     console.log('HolaMundo');
    
// }, 1000);


//recibo el id de usuario, tambien recibo un callback
const getUsuarioById = ( id, callback) => {

    const user = {
        id,
        nombre: 'Jass'
    }

    setTimeout( ()=>{
        callback(user)
    }, 1500);

}

//mando el id de valor 10, recibo el usuario el el callback
getUsuarioById( 10 , ( usuario ) => {
    console.log(usuario);
    //tambien puedo imprimir solo un valor
    console.log( usuario.id );
    //nombre en mayuscula
    console.log( usuario.nombre.toUpperCase() );
});