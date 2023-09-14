const { Product } = require('../../db');

const getProductByPrice = async (minPrice, maxPrice) => {
    const products = await Product.findAll({
        attributes: ["id", "name", "description", "image", "price", "category", "stock", "status"],
        where: {
            price: {
                [Sequelize.Op.between]: [minPrice, maxPrice]
            }
        }
    });

    if (products.length === 0) throw new Error('No hay productos para mostrar en este rango de precio.');

    return products;
};

module.exports = getProductByPrice;
