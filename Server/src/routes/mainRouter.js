const { Router } = require('express');

const productRouter = require('./productRouter');
const userRouter = require('./userRouter');


const mainRouter = Router();

mainRouter.use('/product', productRouter);
mainRouter.use('/user', userRouter);

module.exports = mainRouter;
