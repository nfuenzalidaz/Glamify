const { Review } = require('../../db');

const getReviewByIdController = async (reviewId) => {
  try {
    const review = await Review.findByPk(reviewId);
    return review;
  } catch (error) {
    throw new Error('Error getting review');
  }
};

module.exports = { getReviewByIdController };
