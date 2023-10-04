const nodemailer = require('nodemailer');
require("dotenv").config();
const {NODE_USER, NODE_PASSWORD} = process.env;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: NODE_USER,
      pass: NODE_PASSWORD
    }
});

module.exports = {transporter};