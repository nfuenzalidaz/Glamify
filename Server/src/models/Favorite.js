const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorite', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        addedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, { timestamps: false })
} 