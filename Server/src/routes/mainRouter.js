const { Router } = require("express");

const routerProducto = require("./productRouter");

const mainRouter = Router();

mainRouter.use("/product", routerProducto);

module.exports = mainRouter;