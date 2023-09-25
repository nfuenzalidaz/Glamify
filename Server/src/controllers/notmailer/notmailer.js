const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'glamify.app.co@gmail.com',
		pass: 'fkstemislfisbviz',
	},
});

// Objeto para hacer seguimiento del estado de bienvenida por usuario
const welcomeStatus = {};

const sendWelcomeEmail = async (name, email) => {
	try {
		// Verificar si ya se envió un correo de bienvenida a este usuario
		if (welcomeStatus[email] && welcomeStatus[email].sent) {
			console.log(`El correo de bienvenida ya se envió a ${email}`);
			return false; // No enviar el correo nuevamente
		}

		const mailOptions = {
			from: 'glamify.app.co@gmail.com',
			to: email,
			subject: '¡Bienvenido a Glamify!',
			html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Bienvenido a Glamify</title>
        </head>
        <body>
          <div class="container">
            <h1>¡Bienvenido, ${name}!</h1>
            <p>Gracias por registrarte en Glamify. Esperamos que disfrutes de nuestros servicios.</p>
            <div class="footer">
              <p>Atentamente, Glamify</p>
            </div>
          </div>
        </body>
        </html>
      `,
		};

		const info = await transporter.sendMail(mailOptions);

		// Actualizar el estado de bienvenida para este usuario
		welcomeStatus[email] = { sent: true };

		console.log('Correo de bienvenida enviado:', info.response);

		return true;
	} catch (error) {
		console.error('Error al enviar el correo de bienvenida:', error);
		return false;
	}
};

module.exports = sendWelcomeEmail;
