const { Router } = require('express');
const { check } = require('express-validator');

const {  postUser } = require('../controllers/users.controller.js');
const { userExists, emailExist } = require('../helpers/db-validators.js');
const { validateProperties } = require('../middlewares/index.js');

const router = Router();

router.post('/', [
    check('User_NumEmpleado').custom(userExists),
    check('User_Email').custom(emailExist),
    check('User_Password', 'El password es obligatorio con mas de 9 caracteres').isLength({ min: 9 }),
    validateProperties
], postUser);

module.exports = router;
