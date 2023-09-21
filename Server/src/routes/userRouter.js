const { Router } = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
} = require('../handlers/user/userHandler');
const postProductHandler = require('../handlers/product/postProductHandler');

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
