const { Sequelize, DataTypes } = require("sequelize");

const fs = require("fs");
const path = require("path");

//requerimos dotenv
require("dotenv").config();

//obtenemos las variables del env
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/glamifypf`, {
    logging: false, // oculta la info de cada query que se ejecuta desde postgres
    native: false, // ~30% mejora de rendimiento
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "models"))
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

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};