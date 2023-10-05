const { Product } = require('../../db');

const updateProduct = async (
  id,
  name,
  description,
  image,
  price,
  stock,
  category,
  gender
) => {
  const data = { name, description, image, price, stock, category, gender };

  const product = await Product.findByPk(id);

  if (!product) throw new Error(`El producto: ${id} no existe.`);

  await product.update(data);

  return `El producto ${id} se actualizó exitosamente.`;
};

module.exports = updateProduct;
