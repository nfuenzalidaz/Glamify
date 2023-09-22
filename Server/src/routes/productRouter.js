const { Router } = require('express');
const {
  getAllProductHandler,
  getProductByIdHandler,
} = require('../handlers/product/getAllProductHandler');
const postProductHandler = require('../handlers/product/postProductHandler');
const postReviewsHandler = require('../handlers/reviews/postReviewsHandler');
const getReviewsByProduct = require('../handlers/reviews/getReviewsProduct');
const updateReviewsHandler = require('../handlers/reviews/updateReviewsHandler');
const deleteReviewsHandler = require('../handlers/reviews/deleteReviewsHandler');

const productRouter = Router();

productRouter.get('/', getAllProductHandler);
productRouter.get('/:id', getProductByIdHandler);
productRouter.post('/', postProductHandler);

// Reviews
productRouter.get('/:id/reviews', getReviewsByProduct);
productRouter.post('/:id/reviews', postReviewsHandler);
productRouter.put('/:productId/reviews/:reviewId', updateReviewsHandler);
productRouter.delete('/:productId/reviews/:reviewId', deleteReviewsHandler);

module.exports = productRouter;
