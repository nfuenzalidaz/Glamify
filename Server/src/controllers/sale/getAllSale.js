const { Sail } = require("../../db");

const getAllSail = async () => {
  const sails = await Sail.findAll({
    attributes: ["id", "date", "total_sale", "id_mercado_pago"],
  });
  if (sails.length === 0) throw new Error("No hay ventas para mostrar.");
  return sails;
};

module.exports = getAllSail;
