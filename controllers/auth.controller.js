const { request, response } = require('express');

const bcryptjs = require('bcryptjs');

const { User } = require('../models/users.js');

const { generarJWT } = require('../helpers/generar-jwt.js');

/**
 * Inicia sesión de un usuario.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} - Objeto JSON que contiene el usuario y el token de autenticación.
 * @throws {Object} - Objeto JSON que contiene detalles del error en caso de que ocurra un error.
 */

const authentication = async(req = request, res = response) => {

    const { User_NumEmpleado , User_Password } = req.body;

    try{

    const user = await User.findOne({
        where: {
            User_NumEmpleado
        }
    });

    if( !user){
       return res.status(400).json({
            User_error: 'Usuario no existe'
        })        
    }

    if( !user.User_Status ){
        return res.status(401).json({
            User_error: 'Usuario dado de baja'
        })        
    }

    const isMatched = bcryptjs.compareSync( User_Password, user.User_Password );

    if( !isMatched ){
        return res.status(401).json({
            Password_error: 'Password incorrecto'
        })
    }

    const token = await generarJWT( user.User_Id );
    
    res.status(200).json({
        user,
        token
    })

}catch( error ){

    return res.status(500).json({
        error,
        msg: 'Hubo un error en el servidor'
    });

}

};

module.exports = {
    authentication
}