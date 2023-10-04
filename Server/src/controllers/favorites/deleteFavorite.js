const { Favorite } = require('../../db');

const deleteFavorite = async (id) => {
    const favorite = await Favorite.findByPk(id);

    if (!favorite) {
        throw new Error('Favorite not found');
    }

    await favorite.update({ status: false });

    return "Favorite deleted successfully"
};

module.exports = deleteFavorite;