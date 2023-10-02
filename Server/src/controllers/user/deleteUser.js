const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const deleteUserController = async (userId) => {
  try {
    const user = await auth0ManagementClient.users.get({ id: userId });
    let flag = false;
    let text = 'bloqueado'

    if (!user.data) {
      throw new Error('Usuario no encontrado');
    }
    const blocked = user.data.blocked;
    if (blocked) {
      flag = false;
      text = 'desbloqueado'
    } else {
      flag = true;
      text = 'bloqueado'
    }
    await auth0ManagementClient.users.update(
      { id: userId },
      { blocked: flag }
    );

    return `El usuario ${user.data.name} ha sido ${text} satisfactoriamente`;
  } catch (error) {
    throw new Error('Error al eliminar el usuario');
  }
};

module.exports = { deleteUserController };


// const usegr = await auth0ManagementClient.users.update(
//   { id: userId },
//   { blocked: true }
// );
