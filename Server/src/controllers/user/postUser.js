const { User } = require('../../db');

const createUserController = async (name, email) => {
  try {
    const user = await User.create({ name, email });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Error al crear el usuario');
  }
};
module.exports = { createUserController };
