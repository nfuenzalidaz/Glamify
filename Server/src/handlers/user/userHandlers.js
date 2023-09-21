const {
    createUserController,
    getAllUsersController,
    getUserByIdController,
    deleteUserController,
} = require('../../controllers/user/userControllers');

const createUser = async (req, res) => {
    const { name, email, role } = req.body;

    try {
        const user = await createUserController(name, email, role);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersController();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await getUserByIdController(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await getUserByIdController(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        // Eliminar el usuario
        await deleteUserController(userId);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
};
