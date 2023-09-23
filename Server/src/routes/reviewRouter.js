const { Router } = require('express');
const {
    createReview,
    getAllReview,
    getReviewById,
    deleteReview,
    updateReview
} = require('../handlers/review/reviewHandlers');

const reviewRoute = Router();


reviewRoute.get('/', getAllReview);
reviewRoute.post('/', createReview);
reviewRoute.get('/:id', getReviewById);
reviewRoute.delete('/:id', deleteReview);
reviewRoute.put('/:id', updateReview);

module.exports = reviewRoute;
