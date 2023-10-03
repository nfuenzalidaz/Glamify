const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "glamify.app.co@gmail.com",
      pass: "dcboqjnbrdnijyus" 
    }
});

module.exports = {transporter};
