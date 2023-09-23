const { Sail } = require('../../db');
const { Op } = require('sequelize');

const getSailByDate = async (date) => {
  const data = await Sail.findAll({
    where: { date: { [Op.eq]: date } },
  });
  if (data.length === 0) throw new Error(`No se encontró ningún registro con la fecha: ${date}.`);
  return [...data];
};

module.exports = getSailByDate;
