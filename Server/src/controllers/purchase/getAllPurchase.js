const { Purchase } = require('../../db');

const getPurchaseController = async () => {
  try {
    const purchase = await Purchase.findAll();
    return purchase;
  } catch (error) {
    throw new Error('Fail to get purchase');
  }
};

module.exports = { getPurchaseController };
