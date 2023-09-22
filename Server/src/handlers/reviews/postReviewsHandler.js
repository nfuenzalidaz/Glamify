const postReview = require("../../controllers/reviews/postReviews");

const postReviewsHandler = async (req, res) => {
    const { id: productId } = req.params
    const { description, qualification } = req.body;
    try {
        const review = await postReview(description, qualification, productId);
        res.status(201).json(review);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = postReviewsHandler;