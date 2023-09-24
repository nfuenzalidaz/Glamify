const { Router } = require('express');

const productRouter = require('./productRouter');
const saleRouter = require('./saleRouter');
const userRouter = require('./userRouter');
const reviewRouter = require('./reviewRouter');
const purchaseRouter = require('./purchaseRouter');
const paymentRouter = require('./paymentRouter');


const mainRouter = Router();

mainRouter.use('/product', productRouter);
mainRouter.use('/sale', saleRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/review', reviewRouter);
mainRouter.use('/purchase', purchaseRouter);
mainRouter.use('/payment', paymentRouter);

module.exports = mainRouter;
