const { Testimony } = require('../../db');

const getAllTestimoniesController = async () => {
    try {
        const testimonies = await Testimony.findAll();
        return testimonies;
    } catch (error) {
        throw new Error('Error al obtener los testimonios');
    }
};

module.exports = {getAllTestimoniesController};
