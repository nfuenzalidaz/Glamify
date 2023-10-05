const { Review } = require('../../db');

const getAllReviewController = async () => {
  const reviews = await Review.findAll();
  return reviews;
};

module.exports = { getAllReviewController };
