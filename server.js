const express = require('express');
const app = express();

//conexion mongodb
const archivoBD = require('./conexion');

//rutas y modelo
const rutausuario = require('./rutas/usuario');

//Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

//Confirugacion
app.listen(5000, function (){
    console.log('El servidor está corriendo en el puerto 5000');
})