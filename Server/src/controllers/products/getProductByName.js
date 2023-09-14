const { Product } = require("../../db");
const { Op } = require("sequelize");

const getProductByName = async (name) => {
  const data = await Product.findAll({
    where: { name: { [Op.iLike]: `${name}%` } },
  });
  if (data.length === 0) throw new Error(`No se encontró el producto con el nombre: ${name}.`);

  return [...data];
};

module.exports = getProductByName;