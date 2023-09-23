const {createPurchaseController} = require('../../controllers/purchase/postPurchase');
const {getPurchaseController} = require('../../controllers/purchase/getAllPurchase');


// Controlador para crear una compra
const createPurchase = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        const results = await createPurchaseController([{ productId, userId, quantity }]);
        const successfulPurchases = results.filter((result) => result.purchase);
        if (successfulPurchases.length === 0) {
            res.status(400).json({
                msg: 'No se pudo realizar la compra debido a la falta de stock',
            });
        } else {
            res.status(201).json({
                msg: 'Compra realizada con éxito',
                result: {
                    purchase: successfulPurchases[0].purchase,
                },
            });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const getPurchase = async (req, res) => {
    const { id } = req.params;

    try {
        const purchase = await getPurchaseController(id);
        if (!purchase) {
            return res.status(404).json({ error: 'Compra no encontrada' });
        }
        res.json(purchase);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createPurchase,
    getPurchase,
};
