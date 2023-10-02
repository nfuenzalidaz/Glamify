const { Product, Review, Purchase } = require('../../db');
const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const createReviewController = async (rating, comment, productId, userId) => {
  try {
    const product = await Product.findByPk(productId);
    const user = await auth0ManagementClient.users.get({ id: userId });

    if (!product || !user.data) {
      throw new Error('The product or user does not exist');
    }

    const existingReview = await Review.findOne({
      where: {
        productId,
        userId,
      },
    });

    if (existingReview) {
      throw new Error('The user can only send a single review per product');
    }

    const purchase = await Purchase.findOne({
      where: {
        productId,
        userId,
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

    await review.setUser(userId);
    await review.setProduct(product);

    return review;
  } catch (error) {
    console.log(error);
  }

};

module.exports = { createReviewController };
