const { Sail } = require('../../db');
const { Op } = require('sequelize');

const getSailByIdMP = async (idMercadoPago) => {
  const data = await Sail.findAll({
    where: { id_mercado_pago: { [Op.eq]: idMercadoPago } },
  });
  if (data.length === 0) throw new Error(`No se encontraron ventas con el ID de Mercado Pago: ${idMercadoPago}.`);
  return [...data];
};

module.exports = getSailByIdMP;
