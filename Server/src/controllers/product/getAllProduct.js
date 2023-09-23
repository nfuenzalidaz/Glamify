const { Product } = require('../../db');

const getAllProduct = async () => {
  const product = await Product.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'image',
      'price',
      'category',
      'gender',
      'stock',
      'status',
    ],
    where: {
      status: 'A', // Solo productos activos
    }
  });

  if (product.length === 0) throw new Error('No hay productos para mostrar.');

  return product;
};

module.exports = getAllProduct;
