const { Router } = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
} = require('../handlers/user/userHandlers');

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;