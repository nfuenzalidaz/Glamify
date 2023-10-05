const { Purchase_Detail, Product } = require('../../db');

const getPurchaseByIdController = async (PurchaseId) => {
  try {
    const purchase = await Purchase_Detail.findAll({
      attributes: ["ProductId", "quantity"],
      where: { PurchaseId },
      include: [
        {
          model: Product,
          attributes: ["name"],
        }
      ],
    });
    return purchase;
  } catch (error) {
    throw new Error('Fail to get purchase');
  }
};

module.exports = { getPurchaseByIdController };
