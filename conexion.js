const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.DB_CONECT);

const objetobd = mongoose.connection;

objetobd.on('connected', () => {console.log('Conexion correcta a MongoDB')});
objetobd.on('error', () => {console.log('Error en la conexion a MongoDB')});

module.exports = mongoose;