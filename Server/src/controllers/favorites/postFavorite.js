const { User, Product, Favorite } = require('../../db');

const postFavorite = async (UserId, ProductId) => {
    const user = await User.findByPk(UserId);
    const product = await Product.findByPk(ProductId);

    if (!product || !user) {
        throw new Error('The product or user does not exist');
    };

    const existingFavorite = await Favorite.findOne({
        where: { UserId, ProductId }
    });

    if (existingFavorite) {
        throw new Error('The product is already in favorites');
    };

    const currentDate = new Date();

    const createFavorite = await Favorite.create({
        UserId,
        ProductId,
        addedAt: currentDate,
    })

    await user.addFavorite(createFavorite);

    await product.addFavorite(createFavorite);


    return createFavorite;

};

module.exports = postFavorite;