const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Product',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false
            },
            stock: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
        },
        { timestamps: false, freezeTableName: true }
    )
};