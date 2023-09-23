const { Sale } = require('../../db');
const { Op } = require('sequelize');

const getSaleByTotalSale = async (totalSale) => {
  const data = await Sale.findAll({
    where: { total_sale: { [Op.eq]: totalSale } },
  });
  if (data.length === 0) throw new Error(`No se encontraron registros con el total de venta: ${totalSale}.`);

  return [...data];
};

module.exports = getSaleByTotalSale;
