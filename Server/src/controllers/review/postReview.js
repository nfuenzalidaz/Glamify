const { Product, Review, Purchase } = require('../../db');
const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const createReviewController = async (rating, comment, ProductId, userId) => {
  try {
    const product = await Product.findByPk(ProductId);
    const user = await auth0ManagementClient.users.get({ id: userId });

    if (!product || !user.data) {
      throw new Error('El producto o usuario no existe');
    }

    const existingReview = await Review.findOne({
      where: {
        ProductId,
        userId,
      },
    });

    if (existingReview) {
      throw new Error('El usuario sólo puede enviar una única reseña por producto');
    }

    const purchase = await Purchase.findOne({
      where: {
        ProductId,
        userId,
      },
    });

    if (!purchase) {
      throw new Error('El usuario debe comprar el producto antes de realizar una reseña');
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
