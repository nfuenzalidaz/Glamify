const getAdminByName = require('../../controllers/admin/getAdminByName')

const getAdminByNameHandler = async (req, res) => {
	const {name} = req.body
	try {
		const admin = await getAdminByName(name);
		return res.status(200).json(admin);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.export = getAdminByNameHandler;
