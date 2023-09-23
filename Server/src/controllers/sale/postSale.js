const { Sale } = require('../../db');

const postSale = async (req, res) => {
	const newSale = await Sale.create({
		total_sale,
		id_mercado_pago,
	});
	if (!newSale)
		throw new Error('No pudo realizarse la venta. Intente de nuevo');
	return 'Venta realizada con éxito!';
};

module.exports = postSale;
