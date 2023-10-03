const { Testimony } = require('../../db');

const getTestimonyByIdController = async (testimonyId) => {
    try {
        const testimony = await Testimony.findByPk(testimonyId);
        return testimony;
    } catch (error) {
        throw new Error('Error al obtener el testimonio');
    }
};

module.exports = { getTestimonyByIdController };
