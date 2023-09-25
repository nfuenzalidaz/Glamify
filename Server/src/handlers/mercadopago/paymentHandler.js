const mercadopago = require('mercadopago');
require('dotenv').config();
const { FRONT_HOST, BACK_HOST, ENV } = process.env;
let products = {};

const createOrder = async (req, res) => {
  const cart = req.body;
  products = cart;
  mercadopago.configure({
    access_token:
      'TEST-4800261384804714-092302-e32006eb8b68edfe9583c0b1783aa13f-1489059158',
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: 'Pago Glamify',
        unit_price: cart.totalPrice,
        currency_id: 'ARS',
        quantity: 1,
      },
    ],
    back_urls: {
      success: `${FRONT_HOST}/home`,
      failure: `${FRONT_HOST}/failure`,
      pending: `${FRONT_HOST}/payment/pending`,
    },
    notification_url: `${(ENV = 'dev'
      ? 'https://b628-186-105-68-105.ngrok.io/payment/webhook'
      : `${BACK_HOST}/payment/webhook`)}`,
  });
  res.send(result.body);
};

const receiveWebhook = async (req, res) => {
  const payment = req.query;
  console.log(products);
  try {
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      console.log(data.response);
      //aqui va lo que se guarda para la db
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = { createOrder, receiveWebhook };
