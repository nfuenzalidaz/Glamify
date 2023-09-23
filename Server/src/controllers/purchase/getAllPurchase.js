const { Purchase } = require('../../db');

const getPurchaseController = async (id) => {
    try {
        const purchase = await Purchase.findByPk(id);
        return purchase;
    } catch (error) {
        throw new Error('Fail to get purchase');
    }
};

module.exports = {getPurchaseController};
