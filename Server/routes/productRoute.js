const { Router } = require('express');
const {
    getAllProductsController,
    getProductByIdController,
    createProductController,
    deleteProductController,
} = require('../controllers/products.controller');


const productRoute = Router();

productRoute.get('/', getAllProductsController);
productRoute.get('/:id', getProductByIdController);
productRoute.post('/', createProductController);
productRoute.delete('/:id', deleteProductController);


module.exports = productRoute;