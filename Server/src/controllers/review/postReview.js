const { Product, Review, Purchase, Purchase_Detail } = require('../../db');
const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const createReviewController = async (rating, comment, ProductId, userId) => {

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

    const purchase = await Purchase_Detail.findOne({
      attributes: ["ProductId"],
      where: {
        ProductId: ProductId
      },
      include: [
        {
          model: Purchase,
          attributes: [],
          where: {
            userId: userId
          }
        }
      ],
      group: ["ProductId"]
    })

    if (!purchase) {
      throw new Error('El usuario debe comprar el producto antes de realizar una reseña');
    }

    const review = await Review.create({
      rating,
      comment,
      name: user.data.name,
      userId: userId
    });

    await review.setProduct(ProductId);
    return review;

};

module.exports = { createReviewController };
