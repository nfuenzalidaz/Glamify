const { Testimony } = require('../../db');

const deleteTestimonyController = async (testimonyId) => {
    try {
        const testimony = await Testimony.findByPk(testimonyId);
        if (!testimony) {
            throw new Error('Testimonio no encontrado');
        }

        await testimony.update({ active: !testimony.active });
    } catch (error) {
        throw new Error('Error al eliminar el testimonio');
    }
};

module.exports = {deleteTestimonyController};
