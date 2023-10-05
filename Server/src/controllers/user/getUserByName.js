const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const getUserByNameController = async (name) => {
	try {
		const users = await auth0ManagementClient.users.getAll({
			q: `name:${name}*`,
		});

		const filteredUsers = users.data.map((user) => ({
			id: user.user_id,
			name: user.name,
			email: user.email,
			blocked: user.blocked || false,
		}));

		return filteredUsers;
	} catch (error) {
		throw new Error(`No se encuentra el usuario: ${name}.`);
	}
};

module.exports = { getUserByNameController };
