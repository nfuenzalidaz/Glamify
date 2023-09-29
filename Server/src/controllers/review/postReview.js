const { Product, User, Review, Purchase } = require('../../db');

const createReviewController = async (rating, comment, ProductId, UserId) => {
  try {
    const product = await Product.findByPk(ProductId);
    const user = await User.findByPk(UserId);

    if (!product || !user) {
      throw new Error('The product or user does not exist');
    }

    const existingReview = await Review.findOne({
      where: {
        ProductId,
        UserId,
      },
    });

    if (existingReview) {
      throw new Error('The user can only send a single review per product');
    }

    const purchase = await Purchase.findOne({
      where: {
        ProductId,
        UserId,
      },
    });

    if (!purchase) {
      throw new Error('The user must buy the product before making a review');
    }

    const review = await Review.create({
      rating,
      comment,
      name: user.name,
      image: user.image,
    });

    await review.setUser(user);
    await review.setProduct(product);

    return review;
  } catch (error) {
    console.log(error);
  }

};

module.exports = { createReviewController };
