const mercadopago = require('mercadopago');
const { Purchase, Product, User, Purchase_Detail } = require('../../db');
require('dotenv').config();
const { FRONT_HOST, BACK_HOST, MP_ACCESS_TOKEN, ENV } = process.env;
const { transporter } = require("../../helpers/nodeMailerConfig");

let products = {};
let loggedUser = {};

const createOrder = async (req, res) => {
  const { user, cart } = req.body;
  try {
    if (!user) throw new Error("Usuario no Registrado");
  } catch (error) {
    console.log(error);
  }
  products = cart;
  loggedUser = user;

  mercadopago.configure({
    access_token: MP_ACCESS_TOKEN,
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "Pago Glamify",
        unit_price: cart.totalPrice,
        currency_id: "ARS",
        quantity: 1,
      },
    ],
    back_urls: {
      success: `${FRONT_HOST}/home`,
      failure: `${FRONT_HOST}/home`,
      pending: `${FRONT_HOST}/payment/pending`,
    },
    notification_url: `${
      ENV === "dev"
        ? "https://f89bf27t-3001.use2.devtunnels.ms/payment/webhook"
        : `${BACK_HOST}/payment/webhook`
    }`,
  });
  res.send(result.body);
};

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: '1489318791',
    pass: 'rYKk9Gnjm9',
  },
});

const receiveWebhook = async (req, res) => {
  const payment = req.query;
  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);

      if (products) {
        const purchase = await Purchase.create({
          userId: loggedUser.sub,
          mpId: data.response.id,
          total: products.totalPrice,
        });

        products.cart.forEach(async (product) => {
          const productDB = await Product.findByPk(product.id);
          productDB.stock -= product.quantity;
          await productDB.save();

          const purchaseDetail = await Purchase_Detail.create({
            PurchaseId: purchase.id,
            ProductId: product.id,
            quantity: product.quantity,
          });
        });
      }
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};



module.exports = { createOrder, receiveWebhook };
