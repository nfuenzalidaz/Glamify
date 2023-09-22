const getReview = require("../../controllers/reviews/getReview");

const getReviewsByProduct = async (req, res) => {
    const { id: productId } = req.params
    try {
        const review = await getReview(productId);
        res.status(200).json(review);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = getReviewsByProduct;