const { Review } = require('../../db');

const getAllReviewController = async () => {
  try {
    const reviews = await Review.findAll();
    return reviews;
  } catch (error) {
    throw new Error('Error al obtener reseñas');
  }
};

module.exports = { getAllReviewController };
