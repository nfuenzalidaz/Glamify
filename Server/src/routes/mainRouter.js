const { Router } = require('express');

const productRouter = require('./productRouter');
const saleRouter = require('./saleRouter');

const mainRouter = Router();

mainRouter.use('/product', productRouter);
mainRouter.use('/sale', saleRouter);

module.exports = mainRouter;
