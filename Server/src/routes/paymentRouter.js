const { Router } = require('express');
const { createOrder, webhook } = require('../controllers/mercadopago/paymentController');

const paymentRouter = Router();

paymentRouter.post('/create-order', createOrder);

// Pago exitoso
paymentRouter.get('/success', (req, res) => {
    res.redirect("http://localhost:5173/home");
});

// Pago rechazado
paymentRouter.get('/failure', (req, res) => {
    return res.status(200).send("Pago rechazado");
});

// Pago pendiente
paymentRouter.get('/pending', (req, res) => {
    return res.status(200).send("Pago pendiente");
});

paymentRouter.post('/webhook', webhook);


module.exports = paymentRouter;