const express = require('express');
const cors = require('cors');
const { conn } = require('./db');

class Server {
    constructor() {
        this.app = express();
        this.port = 3001;
        this.productsPath = '/api/products';
        this.usersPath = '/api/users';
        this.purchasePath = '/api/purchase';
        // Conectar a la base de datos  
        this.conectarDB();
        // Rutas de mi aplicación
        this.routes();
    }

    conectarDB() {
        conn.sync({ force: false }).then(() => {
            console.log('Base de datos conectada');
        });
    }


    routes() {
        this.app.use(this.productsPath, require('./routes/productRoute'));
        this.app.use(this.usersPath, require('./routes/userRoute'));
        this.app.use(this.purchasePath, require('./routes/purchaseRoute'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;
