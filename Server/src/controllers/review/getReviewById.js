const { Review } = require('../../db');

const getReviewByIdController = async (id) => {
  const reviews = await Review.findAll({
    where: { ProductId: id },
  });
  return reviews;
};

module.exports = { getReviewByIdController };
