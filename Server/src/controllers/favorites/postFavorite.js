const { User, Product, Favorite } = require('../../db');

const postFavorite = async (UserId, ProductId) => {
    const user = await User.findByPk(UserId);
    const product = await Product.findByPk(ProductId);

    if (!product || !user) {
        throw new Error('The product or user does not exist');
    };

    let existingFavorite = await Favorite.findOne({
        where: { UserId, ProductId },
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
            UserId,
            ProductId,
        });

        await user.addFavorite(existingFavorite);
        await product.addFavorite(existingFavorite);
    }

    return existingFavorite;

};

module.exports = postFavorite;