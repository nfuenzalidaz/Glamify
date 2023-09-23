const { Review } = require('../../db');

const deleteReviewController = async (reviewId) => {
    const review = await Review.findByPk(reviewId);
    if (!review) {
        throw new Error('Review not found');
    }

    await review.destroy();
    return 'Review deleted successfully';
};

module.exports= {deleteReviewController};