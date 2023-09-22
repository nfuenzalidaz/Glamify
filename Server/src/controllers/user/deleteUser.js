const { User} = require('../../db');

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


module.exports = {deleteUserController};
