const { Product, User, Review } = require('../../db');

const createReviewController = async (rating, comment, productId, userId) => {
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);
    if (!user || !product) {
        throw new Error('User not found or product not found')
    }

    const review = await Review.create({
        rating,
        comment,
        productId,
        userId
    });

    await user.addReview(review);
    await product.addReview(review);
};

module.exports = { createReviewController };
