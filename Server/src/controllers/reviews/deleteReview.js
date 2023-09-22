const { Review } = require('../../db');

const deleteReview = async (reviewId, productId) => {
    const review = await Review.findOne({
        where: {
            id: reviewId,
            ProductId: productId
        }
    });

    if (!review) {
        throw new Error('Reseña no econtrada.');
    }

    await review.destroy();
    return review;
}

module.exports = deleteReview;