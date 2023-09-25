// Importa la librería Express
const { Router } = require('express');
const notmailerRouter = Router();
const sendWelcomeEmail = require('../controllers/notmailer/notmailer');

notmailerRouter.post('/sendemail', async (req, res) => {
	const { name, email } = req.body;

	const emailSent = await sendWelcomeEmail(name, email);

	if (emailSent) {
		res.status(200).send('Correo de bienvenida enviado con éxito');
	} else {
		res.status(500).send('Error al enviar el correo de bienvenida');
	}
});

module.exports = notmailerRouter;
