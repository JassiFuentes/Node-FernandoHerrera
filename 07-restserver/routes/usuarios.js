const { Router } = require('express');

const { 
    usuariosGet, 
    usuariosPut, 
    usuariosPost, 
    usuariosPatch, 
    usuariosDelete 
} = require('../controllers/usuarios');

const router = Router();

//1er argumento path, 2do arg controlador
router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);


module.exports = router;