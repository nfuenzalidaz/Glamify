const { Sale } = require("../../db");

const getAllSale = async () => {
  const sales = await Sale.findAll({
    attributes: ["id", "date", "total_sale", "id_mercado_pago"],
  });
  if (sales.length === 0) throw new Error("No hay ventas para mostrar.");
  return sales;
};

module.exports = getAllSale;
