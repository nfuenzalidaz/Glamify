const { Product } = require("../../db");
const postProductValidation = require('../../helpers/postProductValidation');

const postProduct = async (name, description, image, price, category, gender, stock) => {
    
    postProductValidation(name, description, image, price, category, gender, stock);

    const newProduct = await Product.create({
        name,
        description,
        image,
        price,
        category,
        gender,
        stock
    });

    if (!newProduct) throw new Error(`El producto ${name} no pudo crearse.`);
    return `El producto ${name} se creó exitosamente.`;
};

module.exports = postProduct;