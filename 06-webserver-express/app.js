const express = require('express')
const hbs = require('hbs');
//usando variable de entorno para prepara subir mi app al hosting
require('dotenv').config();



const app = express()
//uso el puerto de las variables de entorno
const port = process.env.PORT;


//Handlebars
//utlizando hbs para rendirizar con express
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');



//hacer publica mi carpeta public 
//y Servir contenido Estatico
app.use( express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Jassira Ramos',
    titulo: 'Curso d enode'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Jassira Ramos',
    titulo: 'Curso d enode'
  });  
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Jassira Ramos',
    titulo: 'Curso d enode'
  });  
})

// ya no envio archivos si no que renderizo
  // app.get('/elements', (req, res) => {
  //   res.sendFile(__dirname + '/public/elements.html')
  // })

//si la page no existe
app.get('*', (req, res) => {
    //ruta absoluta
    res.sendFile(__dirname + '/public/404.html');
  })
//puerto que utilizare
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
