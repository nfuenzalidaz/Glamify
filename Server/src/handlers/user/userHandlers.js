const { createUserController } = require('../../controllers/user/postUser');
const { getAllUsersController } = require('../../controllers/user/getAllUser');
const { getUserByIdController } = require('../../controllers/user/getUserById');
const { deleteUserController } = require('../../controllers/user/deleteUser');

const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await createUserController(name, email);
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
    const response = await deleteUserController(userId);
    res.status(200).json(response);
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
