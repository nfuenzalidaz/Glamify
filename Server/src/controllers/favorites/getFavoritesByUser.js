const { Product, User, Favorite } = require('../../db');

const getFavoritesByUser = async (id) => {
    const user = await User.findByPk(id);

    if (!user) {
        throw new Error('User not found');
    };

    const favorites = await Favorite.findAll({
        where: { UserId: id },
        include: Product
    });

    return favorites;
}

module.exports = getFavoritesByUser;