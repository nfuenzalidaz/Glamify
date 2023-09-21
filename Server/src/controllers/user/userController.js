const { User, Purchase } = require('../../db');


const createUserController = async (name, email, role) => {
    try {
        const user = await User.create({ name, email, role });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Error al crear el usuario');
    }
};

const getAllUsersController = async () => {
    try {
        const users = await User.findAll({
            include: {
                model: Purchase,
                attributes: ['id', 'productId', 'userId'],
            },
        });
        return users;
    } catch (error) {
        throw new Error('Error al obtener los usuarios');
    }
};

const getUserByIdController = async (userId) => {
    try {
        const user = await User.findByPk(userId, {
            include: {
                model: Purchase,
                attributes: [
                    'id',
                    'productId',
                    'userId',
                    'quantity',
                    'total',
                ],
            },
        });
        return user;
    } catch (error) {
        throw new Error('Error al obtener el usuario');
    }
};


const deleteUserController = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        await user.update({ active: false });
    } catch (error) {
        throw new Error('Error al eliminar el usuario');
    }
};


module.exports = {
    createUserController,
    getAllUsersController,
    getUserByIdController,
    deleteUserController,
};
