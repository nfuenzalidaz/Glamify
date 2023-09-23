const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Sale',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			total_sale: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			id_mercado_pago: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ freezeTableName: true }
	);
};
