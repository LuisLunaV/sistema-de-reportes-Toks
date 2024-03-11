const { User } = require('../models/users.js');

/**
 * Verifies if a user with the same employee number already exists.
 * @param {string} User_NumEmpleado - User name to verify.
 * @throws {Error} - Error if the user already exists.
 */
const userExists = async( User_NumEmpleado = '' )=>{

    const userExists = await User.findOne({
        where: { User_NumEmpleado }
    });

    if( userExists ){
        throw new Error( `El usuario ${ User_NumEmpleado} ya esta siendo utilizado` );
    }
};


/**
 * Checks if a user exists by its ID.
 * @param {number} id - ID of the user to check.
 * @throws {Error} - Error if the user does not exist.
 */
const userExistById = async( id )=>{
    
    const userExist = await User.findByPk( id );

    if( !userExist ){
        throw new Error(`El usuario con id: ${ id }, no existe`);
    }
};
/**
 * Checks if an email address already exists in the database.
 * @param {string} User_Email - Email address to check.
 * @throws {Error} - Error if the email address is already registered.
 */
const emailExist = async( User_Email = '')=>{
    const emailExist = await User.findOne({ where: { User_Email }});

    if( emailExist ){
        throw new Error(`El correo ${ User_Email } ya ha sido registrado`);
    }
};

/**
 * Checks if an employee number already exists in the database.
 * @param {string} User_NumEmpleado - Employee number to check.
 * @throws {Error} - Error if the employee number does not exist.
 */
const employedExist = async( number = '' )=>{

    const employed = await Employed.findOne({ where: { Emp_Number: number }});
    if( !employed ){
        throw new Error(`El empleado ${ number } no esta registrado en la Base de datos`);
    }
}

module.exports = {
    userExists,
    userExistById,
    emailExist,
    employedExist
};
