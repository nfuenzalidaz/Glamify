const { Product, Favorite } = require('../../db');
const auth0ManagementClient = require('../../helpers/auth0ManagementClient');

const postFavorite = async (userId, ProductId) => {
    const user = await auth0ManagementClient.users.get({ id: userId });
    const product = await Product.findByPk(ProductId);

    if (!product || !user) {
        throw new Error('The product or user does not exist');
    };

    let existingFavorite = await Favorite.findOne({
        where: { userId, ProductId },
        include: Product,
    });

    if (existingFavorite) {
        if (!existingFavorite.status) {
            // Si está inactivo, actualízalo a activo
            await existingFavorite.update({ status: true });
        } else {
            throw new Error('The product is already in favorites');
        }
    } else {
        existingFavorite = await Favorite.create({
            userId,
            ProductId,
        });

        await product.addFavorite(existingFavorite);
    }

    return existingFavorite;

};

module.exports = postFavorite;