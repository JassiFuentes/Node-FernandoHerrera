const { response } = require('express');


const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    })
}

const usuariosPost = (req, res) => {

    //recibo lo que mande el usuario
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - c',
        //mando como respuesta lo que recibo del usuario
        nombre, 
        edad
    })
}

const usuariosPut =  (req, res) => {

    const {id} = req.params;

    res.status(400).json({
        msg: 'put API - c',
        id
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - c'
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API -c '
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost, 
    usuariosPatch, 
    usuariosDelete
}