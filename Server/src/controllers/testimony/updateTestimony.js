const { Testimony } = require('../../db');

const updateTestimonyController = async (testimonyId, name, comment) => {
    try {
        const testimony = await Testimony.findByPk(testimonyId);
        if (!testimony) {
            throw new Error('Testimonio no encontrado');
        }
        testimony.name = name;
        testimony.comment = comment;
        await testimony.save();
        return testimony;
    } catch (error) {
        throw new Error('Error al actualizar el usuario');
    }
};

module.exports = { updateTestimonyController };
