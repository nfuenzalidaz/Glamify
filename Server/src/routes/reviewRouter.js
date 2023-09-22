const { Router } = require('express');
const {
    createReview,
    getAllReview,
    getReviewById,
    deleteReview,
} = require('../handlers/review/reviewHandlers');

const reviewRoute = Router();


reviewRoute.get('/', getAllReview);
reviewRoute.post('/', createReview);
reviewRoute.get('/:id', getReviewById);
reviewRoute.delete('/:id', deleteReview);

module.exports = reviewRoute;
