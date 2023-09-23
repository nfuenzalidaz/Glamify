const { User, Purchase } = require('../../db');

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
module.exports = {getAllUsersController};
