const { Router } = require('express');
const getAllSaleHandler = require('../handlers/sale/getAllSaleHandler');
const postSaleHandler = require('../handlers/sale/postSaleHandler');

const saleRouter = Router();

saleRouter.get('/', getAllSaleHandler);
saleRouter.post('/', postSaleHandler);

module.exports = saleRouter;
