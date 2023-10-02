const { User, Purchase } = require('../../db');

const getUserByIdController = async (userId) => {
    try {
        const user = await User.findByPk(userId, {
            include:  [
                { model: Purchase },
                { model: Review },
              ],
        });
        return user;
    } catch (error) {
        throw new Error('Error al obtener el usuario');
    }
};

module.exports = { getUserByIdController};