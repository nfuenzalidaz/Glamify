const { Review, Product } = require('../../db');

const updateReview = async (reviewId, productId, description, qualification) => {
    const existingReview = await Review.findByPk(reviewId);

    if (!existingReview) {
        throw new Error('La reseña no existe');
    }

    // Actualizamos la revisión con los nuevos datos
    existingReview.description = description;
    existingReview.qualification = qualification;

    await existingReview.save();

    return existingReview;
}

module.exports = updateReview;