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
        notification_url: "https://f5ec-181-12-19-2.ngrok.io/payment/webhook",
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
        if (payment.type === 'payment') {
            const data = await mercadopago.payment.findById(payment['data.id']);
            console.log(data);
        }

        res.status(204).send('Procesando pago...');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }


};

module.exports = {
    createOrder,
    webhook
}