require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
    DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
  
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/glamify`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
    .filter(
        (file) =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
    )
    .forEach((file) => {
        const modelDefiner = require(path.join(__dirname, '/models', file));
        modelDefiners.push(modelDefiner(sequelize));
    });

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
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
