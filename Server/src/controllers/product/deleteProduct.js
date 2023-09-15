const { Product } = require('../../db');

const deleteProduct = async (id, status) => {
  const product = await Product.findOne({ where: { id: id } });
  if (!product) throw new Error(`El producto ${id} no existe.`);
  product.status = status;
  await product.save();

  if (!product)
    throw new Error(`El producto con el id ${id} no pudo eliminarse.`);
  return `El producto ${product.name} fue eliminado exitosamente.`;
};

module.exports = deleteProduct;
