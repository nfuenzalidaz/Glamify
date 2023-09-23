
const postSale = require('../../controllers/sale/postSale');

const postSaleHandler = async (req, res) => {
	const { id_sale, id_customer, total_sale, id_mercado_pago } = req.body;
	try {
		const newSale = await postSale(id_sale, id_customer, total_sale, id_mercado_pago);
		return res.status(201).json(newSale);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = postSaleHandler;
