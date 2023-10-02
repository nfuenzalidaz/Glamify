const { Product, User, Review, Purchase } = require('../../db');

const createReviewController = async (rating, comment, ProductId, UserId) => {
  try {
    const product = await Product.findByPk(ProductId);
    const user = await User.findByPk(UserId);

    if (!product || !user) {
      throw new Error('El producto o usuario no existe');
    }

    const existingReview = await Review.findOne({
      where: {
        ProductId,
        UserId,
      },
    });

    if (existingReview) {
      throw new Error('El usuario sólo puede enviar una única reseña por producto.');
    }

    const purchase = await Purchase.findOne({
      where: {
        ProductId,
        UserId,
      },
    });

    if (!purchase) {
      throw new Error('El usuario debe comprar el producto antes de realizar una reseña.');
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
