const { Product } = require("../../db");

const getProductById = async (id) => {
  const data = await Product.findByPk(id);
  if (!id) throw new Error(`El siguiente id: ${id}, no es válido para mostrar el producto.`);

  return data;
};

module.exports = getProductById;