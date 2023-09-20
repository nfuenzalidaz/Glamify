const { Router } = require('express');

const productRouter = require('./productRouter');
const paymentRouter = require('./paymentRouter');

const mainRouter = Router();

mainRouter.use('/payment', paymentRouter);

mainRouter.use('/product', productRouter);

module.exports = mainRouter;
