const { Router } = require('express');
const { check  } = require('express-validator');

const { validateProperties } = require('../middlewares/validate-properties.js');

const { authentication } = require('../controllers/auth.controller.js');

const router = Router();


// Ruta para el logeo e inicio de sesión
router.post('/', [
    check('User_NumEmpleado', 'El numero de empleado es obligatorio').not().isEmpty(),
    check('User_Password', 'El password es obligatorio').not().isEmpty(),
    validateProperties 
], authentication);

module.exports = router;