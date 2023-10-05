const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const updateUser = async ({ userId, userName }) => {
	try {
        await auth0ManagementClient.users.update({ id: userId }, { name: userName });
        return `El nombre del usuario ha sido actualizado exitosamente a: ${userName}`;
	} catch (error) {
        throw new Error('Error al actualizar el nombre del usuario. Intentelo de nuevo')
    }
};

module.exports = {updateUser};
