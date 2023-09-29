const { User, Purchase, Review } = require('../../db');

const getAllUsersController = async () => {
    try {
        const users = await User.findAll({
            include: [
                { model: Purchase },
                { model: Review },
              ],
        });
        return users;
    } catch (error) {
        throw new Error('Error al obtener los usuarios');
    }
};
module.exports = {getAllUsersController};
