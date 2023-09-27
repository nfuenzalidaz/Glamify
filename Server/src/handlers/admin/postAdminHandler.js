const postAdmin = require('../../controllers/admin/postAdmin');

const postAdminHandler = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const newAdmin = await postAdmin(name, email, password);
		res.json(newAdmin);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = postAdminHandler;
