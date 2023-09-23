const { Review } = require('../../db');

const updateReviewController = async (id, rating, comment) => {
    const review = await Review.findByPk(id);

    if (!review) {
        throw new Error('Review not found');
    }

    review.rating = rating;
    review.comment = comment;

    await review.save();

    return review;
}

module.exports = {updateReviewController};
