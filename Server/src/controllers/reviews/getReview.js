const { Product, Review } = require('../../db');

const getReview = async (productId) => {
    const product = await Product.findByPk(productId, {
        include: {
            model: Review
        }
    });

    if (!product) {
        throw new Error('El producto no existe');
    }

    return product.Reviews;
}

module.exports = getReview;