const { Sail } = require('../../db');
const { Op } = require('sequelize');

const getSailByTotalSail = async (totalSale) => {
  const data = await Sail.findAll({
    where: { total_sale: { [Op.eq]: totalSale } },
  });
  if (data.length === 0) throw new Error(`No se encontraron registros con el total de venta: ${totalSale}.`);

  return [...data];
};

module.exports = getSailByTotalSail;
