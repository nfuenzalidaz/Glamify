const {createReviewController} = require('../../controllers/review/postReview');
const {getAllReviewController} = require('../../controllers/review/getAllReview');
const {getReviewByIdController} = require('../../controllers/review/getReviewById');
const {deleteReviewController,} = require('../../controllers/review/deleteReview');

const createReview = async (req, res) => {
    const { rating, comment, productId, userId } = req.body;


    try {
        const review = await createReviewController(
            rating,
            comment,
            productId,
            userId
        );
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllReview = async (req, res) => {
    try {
        const reviews = await getAllReviewController();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getReviewById = async (req, res) => {
    const reviewId = req.params.id;

    try {
        const review = await getReviewByIdController(reviewId);
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteReview = async (req, res) => {
    const reviewId = req.params.id;

    try {
        const review = await getReviewByIdController(reviewId);
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        // Eliminar la review
        await deleteReviewController(reviewId);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createReview,
    getAllReview,
    getReviewById,
    deleteReview,
};
