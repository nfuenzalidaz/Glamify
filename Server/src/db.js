const { Sequelize, DataTypes } = require("sequelize");

const fs = require("fs");
const path = require("path");

//requerimos dotenv
require("dotenv").config();

//obtenemos las variables del env
const {
    DB_HOST,
} = process.env;

const sequelize = new Sequelize(DB_HOST, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


const basename = path.basename(filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(dirname, "models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "models", file)));
    });


// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);

//extraemos los modelos
sequelize.models = Object.fromEntries(capsEntries);
// Relaciones

const { Product, User, Purchase } = sequelize.models;

// Relación Product - Purchase
Product.hasMany(Purchase, { foreignKey: 'product_id' });
Purchase.belongsTo(Product, { foreignKey: 'product_id' });

// Relación User - Purchase
User.hasMany(Purchase, { foreignKey: 'User_id' });
Purchase.belongsTo(User, { foreignKey: 'User_id' });

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};