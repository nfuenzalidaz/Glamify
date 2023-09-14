const { Router } = require("express");
const {
    getAllProductsHandlers,
    getProductByIdHandler
} = require("../handlers/products/getAllProductsHandler");
const postProductHandler = require("../handlers/products/postProductHandler");

const routerProducto = Router();

routerProducto.get("/", getAllProductsHandlers);
routerProducto.get("/:id", getProductByIdHandler);
routerProducto.post("/", postProductHandler);

module.exports = routerProducto;