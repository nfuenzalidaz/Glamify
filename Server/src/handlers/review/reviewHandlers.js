const {
  createReviewController,
} = require('../../controllers/review/postReview');
const {
  getAllReviewController,
} = require('../../controllers/review/getAllReview');
const {
  getReviewByIdController,
} = require('../../controllers/review/getReviewById');
const {
  deleteReviewController,
} = require('../../controllers/review/deleteReview');
const {
  updateReviewController,
} = require('../../controllers/review/updateReview');
const createReview = async (req, res) => {
  const { rating, comment, ProductId, userId } = req.body;

  try {
    const review = await createReviewController(
      rating,
      comment,
      ProductId,
      userId
    );
    res.status(201).json(review);
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
  const {id} = req.params;

  try {
    const review = await getReviewByIdController(id);
    if (!review) {
      return res.status(404).json({ error: 'Reseña no encontrada' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  try {
    await deleteReviewController(reviewId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateReview = async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;
  try {
    const review = await updateReviewController(id, rating, comment);
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createReview,
  getAllReview,
  getReviewById,
  deleteReview,
  updateReview,
};
