const { Product, Favorite } = require('../../db');
const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const getFavoritesByUser = async (id) => {
    const user = await auth0ManagementClient.users.get({ id: id });

    if (!user) {
        throw new Error('User not found');
    };

    const favorites = await Favorite.findAll({
        where: { userId: id, status: true },
        include: Product
    });

    return favorites;
}

module.exports = getFavoritesByUser;