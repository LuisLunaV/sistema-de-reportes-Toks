const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const { User } = require("../models/users.js");
const { validateObjectProperties } = require("../helpers/validate-objects.js");

const users = {
  postUser: async (req = request, res = response) => {
    const body = req.body;
    console.log(body);
    try {
      //Validamos si las propiedades del objeto estan vacias
      if (validateObjectProperties(body)) {
        return res.status(400).json({
          msg: "Se necesitan llenar todos los campos",
        });
      }

      const { User_Name, User_NumEmpleado, User_Email, User_Password } = body;

      const user = new User({
        User_Name,
        User_NumEmpleado,
        User_Email,
        User_Password,
      });

      user.User_Name = User_Name.toUpperCase();
      user.User_NumEmpleado = User_NumEmpleado.toUpperCase();

      const salt = bcryptjs.genSaltSync();
      user.User_Password = bcryptjs.hashSync(User_Password, salt);

      await user.save();

      return res.status(201).json({
        user,
      });
    } catch (error) {
      return res.status(500).json({
        error,
        msg: "Hubo un error en el servidor",
      });
    }
  },

  // putUser: (req = request, res = response) => {
  //   try {
  //     // Add your logic for updating user
  //   } catch (error) {
  //     res.status(500).json({
  //       msg: "Error updating user, please contact the administrator",
  //       error,
  //     });
  //   }
  // },

  // deleteUser: (req = request, res = response) => {
  //   try {
  //     // Add your logic for deleting user
  //   } catch (error) {
  //     res.status(500).json({
  //       msg: "Error deleting user, please contact the administrator",
  //       error,
  //     });
  //   }
  // },
};

module.exports = users;
