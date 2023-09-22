const updateReview = require("../../controllers/reviews/updateReview");

const updateReviewsHandler = async (req, res) => {
    const { reviewId, productId } = req.params;
    const { description, qualification } = req.body;
    try {
        const review = await updateReview(reviewId, productId, description, qualification);
        res.status(200).json(review);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = updateReviewsHandler;