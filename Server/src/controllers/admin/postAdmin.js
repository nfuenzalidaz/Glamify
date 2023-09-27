const { Admin } = require('../../db');

const postAdmin = async (name, email, password) => {
	const newAdmin = await Admin.create({ name, email, password });
	if (!newAdmin) throw new Error(`Error al crear el administrador ${name}.`);
	return `El administrador ${name} se creó exitosamente.`;
};

module.exports = postAdmin;
