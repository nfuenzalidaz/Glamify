const { Router } = require('express');

const productRouter = require('./productRouter');

const mainRouter = Router();

mainRouter.use('/product', productRouter);

module.exports = mainRouter;
