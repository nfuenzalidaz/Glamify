const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorite', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
          },
    }, { timestamps: false })
} 