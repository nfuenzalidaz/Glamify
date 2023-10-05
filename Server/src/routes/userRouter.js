const { Router } = require('express');
const {
    createUser,
    getAllUsers,
    getUserByName,
    getUserById,
    deleteUser,
} = require('../handlers/user/userHandlers');

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/name', getUserByName);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;