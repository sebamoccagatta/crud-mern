const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario);

module.exports = router;

/* router.get('/ejemplo', (req, res) => {
    res.send('Saludo carga desde ruta ejemplo')
}) */

//agregar usuario
router.post('/agregar-usuario', (req, res) => {
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })

    nuevoUsuario.save(function (err) {
        if (!err){
            res.send('Usuario agregado correctamente')
        } else {
            res.send(err)
        }
    })
});


//Obtener Usuarios
router.get('/obtener-usuarios', (req, res) => {
    ModeloUsuario.find({}, function (docs, err) {
        if (!err){
            res.send(docs);
            
        } else {
            res.send(err)
        }
    })
})

//Obtener data Usuarios
router.post('/obtener-data-usuario', (req, res) => {
    ModeloUsuario.find({idusuario: req.body.idusuario}, function (docs, err) {
        if (!err){
            res.send(docs);
        } else {
            res.send(err)
        }
    })
})

//Editar usuario
router.post('/editar-usuario', (req, res) => {

    ModeloUsuario.findOneAndUpdate({idusuario: req.body.idusuario},  {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
        if (!err){
            res.send('Usuario actualizado correctamente');
        } else {
            res.send(err)
        }
    })
});

//Eliminar usuario
router.post('/eliminar-usuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({idusuario: req.body.idusuario}, (err) =>{
        if (!err){
            res.send('Usuario eliminado correctamente');
        } else {
            res.send(err)
        }
    })
});