const { Router } = require('express');
const {
    createPurchase,
    getPurchase,
} = require('../handlers/purchase/purchaseHandlers');

const purchaseRoute = Router();

purchaseRoute.post('/', createPurchase);
purchaseRoute.get('/:id', getPurchase)


module.exports = purchaseRoute;
