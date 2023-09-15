const { Product } = require('../../db');

const getAllProduct = async () => {
  const product = await Product.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'image',
      'price',
      'gender',
      'category',
      'stock',
      'status',
    ],
  });
  if (product.length === 0) throw new Error('No hay productos para mostrar.');
  return product;
};

module.exports = getAllProduct;
