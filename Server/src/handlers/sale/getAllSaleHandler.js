const getAllSale = require("../../controllers/sale/getAllSale");
const getSaleByDate = require("../../controllers/sale/getSaleByDate");
const getSaleByIdMP = require("../../controllers/sale/getSaleByIdMP");
const getByTotalSale = require("../../controllers/sale/getByTotalSale");

const getAllSaleHandler = async (req, res) => {
  const { date, total_sale, id_mercado_pago } = req.query;

  if (date) {
    try {
      const sale = await getSaleByDate(date);
      return res.status(200).json(sale);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else if (total_sale) {
    try {
      const sale = await getByTotalSale(date);
      return res.status(200).json(sale);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else if (id_mercado_pago) {
    try {
      const sale = await getSaleByIdMP(id_mercado_pago);
      return res.status(200).json(sale);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    try {
      const sale = await getAllSale();
      return res.status(200).json(sale);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

module.exports = getAllSaleHandler;
