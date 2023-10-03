const { DataTypes } = require('sequelize');

const purchaseModel = (sequelize) => {
  sequelize.define(
    'Purchase',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      mpId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { paranoid: true }
  );
};

module.exports = purchaseModel;
