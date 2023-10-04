const { Review, Product } = require('../../db');
const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const getReviewByIdController = async (id) => {
  try {
    const user = await auth0ManagementClient.users.get({ id });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const reviews = await Review.findAll({
      where: { userId: id, status: true },
      include: Product,
    });

    return reviews;
  } catch (error) {
    throw new Error('Error al obtener las reseñas y/o información del usuario');
  }
};

module.exports = { getReviewByIdController };


