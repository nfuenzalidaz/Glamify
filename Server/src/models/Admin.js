const { DataTypes } = require('sequelize');

const userModel = (sequelize) => {
	sequelize.define(
		'Admin',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(100),
				allowNull: true,
				unique: true,
				validate: {
					isEmail: {
						msg: 'Email inválido',
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			timestamps: false,
		}
	);
};

module.exports = userModel;
