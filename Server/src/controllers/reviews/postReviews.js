const { Review, Product } = require('../../db');

const postReview = async (description, qualification, productId) => {
    const product = await Product.findByPk(productId);
    if (!product) {
        throw new Error('El producto no existe');
    }

    // Crear una nueva reseña
    const newReview = await Review.create({
        description,
        qualification,
    });

    await newReview.setProduct(product);

    return newReview;
}

module.exports = postReview;