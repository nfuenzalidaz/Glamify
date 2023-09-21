const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Venta',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			fecha: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			total_venta: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			id_mercado_pago: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ timestamps: false, freezeTableName: true }
	);
};
