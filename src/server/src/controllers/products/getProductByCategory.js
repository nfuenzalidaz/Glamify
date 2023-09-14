const { Product } = require('../../db');

const getProductByCategory = async (category) => {
    const product = await Product.findAll({
        attributes: ["id", "name", "description", "image", "price", "category", "stock", "status"],
        where: {
            category: category
        }
    });
    if (product.length === 0) throw new Error(`No hay productos para mostrar en la categoría: ${category}.`);

    return product;
};

module.exports = getProductByCategory;
