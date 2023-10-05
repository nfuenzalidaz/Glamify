const { Router } = require('express');
const {
  createPurchase,
  getPurchase,
} = require('../handlers/purchase/purchaseHandler');

const purchaseRoute = Router();

purchaseRoute.post('/', createPurchase);
purchaseRoute.get('/', getPurchase);
purchaseRoute.get('/:id', getPurchase);

module.exports = purchaseRoute;
