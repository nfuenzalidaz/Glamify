const { Review } = require('../../db');

const deleteReviewController = async (reviewId) => {
  try {
    const review = await Review.findByPk(reviewId);
    if (!review) {
      throw new Error('Review not found');
    }
    await review.destroy();
    return 'Review deleted successfully';
  } catch (error) {
    throw new Error('Error deleting review');
  }
};

module.exports = { deleteReviewController };
