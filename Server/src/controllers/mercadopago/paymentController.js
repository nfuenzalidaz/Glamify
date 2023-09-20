const mercadopago = require('mercadopago');

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

mercadopago.configure({
    access_token: ACCESS_TOKEN
})

// Controlador para crear una orden de pago
const createOrder = async (req, res) => {
    const { id, name, description, image, price, category, stock, quantity } = req.body;

    // Crear una preferencia de pago
    let preference = {
        items: [
            {
                id: id,
                title: name,
                unit_price: price,
                quantity: quantity,
                currency_id: "ARS",
                picture_url: image,
                description: description,
            }
        ],
        back_urls: {
            success: "http://localhost:3001/payment/success",
            failure: "http://localhost:3001/payment/failure",
            pending: "http://localhost:3001/payment/pending"
        },
        notification_url: "https://7ef8-181-12-16-42.ngrok.io/payment/webhook",
    };

    mercadopago.preferences
        .create(preference)
        .then((response) => res.status(200).json(response))
        .catch((error) => res.status(404).json({ error: error.message }));
};

// Controlador para el webhook de Mercado Pago
const webhook = async (req, res) => {
    const payment = req.query;
    try {
        if (payment.type === 'payment' && payment.status === 'approved') {
            const data = await mercadopago.payment.findById(payment['data.id']);
            console.log(data);
        }

        // Esta resolucion es cuando se haga las relaciones de Product y user
        /*
        // Actualiza el modelo Product (por ejemplo, reduce el stock)
        const product = await Product.findByPk(payment.productId);
        if (product) {
            product.stock -= payment.quantity;
            await product.save();
        }

        // Actualiza el modelo User (por ejemplo, registra la compra en el historial)
        const user = await User.findByPk(payment.userId);
        if (user) {
            user.addPurchase(product, { through: { quantity: payment.quantity } });
        }

        console.log('Compra registrada con éxito');
        */

        res.status(204).send('Procesando pago...');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }


};

module.exports = {
    createOrder,
    webhook
}