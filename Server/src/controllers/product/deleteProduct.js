const { Product } = require('../../db');

const deleteProduct = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) throw new Error(`El producto ${id} no existe.`);
    product.destroy();
    return `El producto ${product.name} fue eliminado exitosamente.`;
  } catch (error) {
    throw new Error(`El producto con el id ${id} no pudo eliminarse.`);
  }
};

module.exports = deleteProduct;
