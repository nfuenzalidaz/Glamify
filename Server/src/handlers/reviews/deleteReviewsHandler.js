const deleteReview = require("../../controllers/reviews/deleteReview");

const deleteReviewsHandler = async (req, res) => {
    const { reviewId, productId } = req.params;
    try {
        const deleted = await deleteReview(reviewId, productId);
        res.status(204).json({ message: "Reseña eliminada con exito!" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = deleteReviewsHandler;