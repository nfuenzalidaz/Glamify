const { Router } = require('express');
const {
  getAllProductHandler,
  getProductByIdHandler,
} = require('../handlers/product/getAllProductHandler');
const postProductHandler = require('../handlers/product/postProductHandler');

const productRouter = Router();

productRouter.get('/', getAllProductHandler);
productRouter.get('/:id', getProductByIdHandler);
productRouter.post('/', postProductHandler);

module.exports = productRouter;
