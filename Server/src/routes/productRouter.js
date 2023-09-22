const { Router } = require('express');
const { 
  getAllProductHandler, 
  getProductByIdHandler, 
  deleteProductHandler, // Asegúrate de incluir esta línea
} = require('../handlers/product/getAllProductHandler');
const postProductHandler = require('../handlers/product/postProductHandler');
//const deleteProductHandler = require('../handlers/product/deleteProductHandler'); // Corregir la importación

const productRouter = Router();

productRouter.get('/', getAllProductHandler);
productRouter.get('/:id', getProductByIdHandler);
productRouter.post('/', postProductHandler);
productRouter.delete('/:id', deleteProductHandler);

module.exports = productRouter;
