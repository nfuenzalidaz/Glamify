const mercadopago = require('mercadopago');
require("dotenv").config();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

mercadopago.configure({
    access_token: "TEST-6249211308826827-092223-cfea622261b19de4dbf12169a48fee53-1483807773"
})

// Controlador para crear una orden de pago
const createOrder = async (req, res) => {
    const { name, description, price, quantity } = req.body;

    // Crear una preferencia de pago
    let preference = {
        items: [
            {
                title: name,
                unit_price: price,
                quantity: quantity,
                currency_id: "ARS",
                description: description,
            }
        ],
        back_urls: {
            success: "http://localhost:3001/payment/success",
            failure: "http://localhost:3001/payment/failure",
            pending: "http://localhost:3001/payment/pending"
        },
        notification_url: "https://6ee7-181-12-19-83.ngrok.io/payment/webhook",
    };

    mercadopago.preferences
        .create(preference)
        .then((response) => res.status(200).json(response.body))
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

        res.sendStatus(204);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createOrder,
    webhook
}