const { Router } = require('express');
const {
  getAllProductHandler,
  getProductByIdHandler,
} = require('../handlers/product/getAllProductHandler');
const postProductHandler = require('../handlers/product/postProductHandler');
const updateProductHandler = require('../handlers/product/updateProductoHandler');

const productRouter = Router();

productRouter.get('/', getAllProductHandler);
productRouter.get('/:id', getProductByIdHandler);
productRouter.post('/', postProductHandler);
productRouter.put('/:id', updateProductHandler);

module.exports = productRouter;
