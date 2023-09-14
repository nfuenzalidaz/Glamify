const postProduct = require('../../controllers/products/postProduct');

const postProductHandler = async (req, res) => {
    const { name, description, image, price, category, stock } = req.body;
    try {
        const createdProduct = await postProduct(name, description, image, price, category, stock);
        return res.status(201).json({ message: createdProduct });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = postProductHandler;