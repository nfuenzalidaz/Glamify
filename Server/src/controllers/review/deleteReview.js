const { Review } = require('../../db');

const deleteReviewController = async (id) => {
    const review = await Review.findByPk(id);

    if (!review) {
        throw new Error('Reseña no encontrado');
    }

    await review.update({ status: false });

    return "Reseña eliminada exitosamente"
};

module.exports = {deleteReviewController};

