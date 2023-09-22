const { Product, User, Purchase } = require('../db');

// Función para crear una compra
const createPurchaseController = async (purchases) => {
    try {
        const results = [];

        for (const { productId, userId, quantity } of purchases) {
            // Verificar si el producto y el usuario existen
            const product = await Product.findByPk(productId);
            const user = await User.findByPk(userId);

            if (!product || !user) {
                results.push({
                    productId,
                    error: 'El producto o el usuario no existen',
                });
                continue;
            }

            if (product.stock < quantity) {
                results.push({
                    productId,
                    error: 'No hay suficiente stock disponible para la compra',
                });
                continue;
            }

            // Restar la cantidad comprada del stock del producto
            product.stock -= quantity;
            await product.save();

            // Calcular el total de la compra
            const total = product.price * quantity;

            // Crear la compra
            const purchase = await Purchase.create({
                productId,
                userId,
                quantity,
                total,
            });

            await purchase.setUser(user);
            await purchase.setProduct(product);

            results.push({
                purchase: {
                    userId,
                    productId,
                    quantity,
                    total,
                },
            });
        }

        return results;
    } catch (error) {
        throw error;
    }
};

module.exports = {createPurchaseController};
