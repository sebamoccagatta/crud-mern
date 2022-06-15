const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudmern');

const objetobd = mongoose.connection;

objetobd.on('connected', () => {console.log('Conexion correcta a MongoDB')});
objetobd.on('error', () => {console.log('Error en la conexion a MongoDB')});

module.exports = mongoose;