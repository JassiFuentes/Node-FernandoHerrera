const http = require('http');//paquete de node


//crear servidor
//request lo que solicito a mi webserver
//response lo que mi servidor responde al cliente
http.createServer( (req, res) => {

    // console.log(req);

    //si la url nola manejo en mi backend, indico el status que quiero manejar 404
    // res.writeHead(404)

    //devuelvo el status y el tipod e contenido
    // res.writeHead(200, { 'Content-Type': 'application/json' })
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });


    //quiero mandar una respuesta
    //cuando hagan una solicitud a mi backend regresar esto
    res.write('id, nombre\n');
    res.write('1, nombre\n');
    res.write('2, nombre\n');
    res.end();
})
// .listen(8080);

// console.log('escuchando el puerto', 8080);