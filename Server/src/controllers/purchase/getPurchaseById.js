const { Purchase } = require('../../db');

const getPurchaseByIdController = async (id) => {
  try {
    const purchase = await Purchase.findByPk(id);
    return purchase;
  } catch (error) {
    throw new Error('Fail to get purchase');
  }
};

module.exports = { getPurchaseByIdController };
