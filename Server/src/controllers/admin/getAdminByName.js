const { Admin } = require('../../db');
const { Op } = require('sequelize');

const getAdminByName = async (name) => {
  const data = await Admin.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  if (data.length === 0)
    throw new Error(`No se encontró el producto con el nombre: ${name}.`);

  return [...data];
};

module.exports = getAdminByName;
