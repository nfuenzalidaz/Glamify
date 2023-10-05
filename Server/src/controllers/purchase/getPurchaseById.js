const { Purchase_Detail } = require('../../db');

const getPurchaseByIdController = async (PurchaseId) => {
  try {
    const purchase = await Purchase_Detail.findAll({
      attributes: ["ProductId", "quantity"],
      where: { PurchaseId },
    });
    return purchase;
  } catch (error) {
    throw new Error('Fail to get purchase');
  }
};

module.exports = { getPurchaseByIdController };
