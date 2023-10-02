const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const getAllUsersController = async () => {
  try {
    const users = await auth0ManagementClient.users.getAll();

    let filteredUsers = [];
    const filter = users.data.forEach((user) => {
      let blocked = false;
      if(user.blocked) blocked = user.blocked;
      filteredUsers.push({
        id: user.user_id,
        name: user.name,
        email: user.email,
        blocked: blocked,
      });
    });
    return filteredUsers;
  } catch (error) {
    throw new Error('Error al obtener los usuarios');
  }
};

module.exports = { getAllUsersController };
