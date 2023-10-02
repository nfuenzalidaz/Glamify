const { Review } = require('../../db');

const deleteReviewController = async (reviewId) => {

  try {
    const review = await Review.findByPk(reviewId);
    if (!review) {
      throw new Error('Reseña no encontrada');
    }
    await review.update({ active: false });
    return 'Revisión eliminada exitosamente';
  } catch (error) {
    throw new Error('Error al eliminar la reseña');
  }
};

module.exports = { deleteReviewController };

