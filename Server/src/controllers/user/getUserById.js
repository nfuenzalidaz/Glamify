const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const getUserByIdController = async (userId) => {
  try {
    const user = await auth0ManagementClient.users.get({ id: userId });
    return user.data;
  } catch (error) {
    throw new Error(`Error al obtener el usuario con id ${userId}`);
  }
};

module.exports = { getUserByIdController };
