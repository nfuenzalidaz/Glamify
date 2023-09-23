const { Product } = require("../../db");
// const postProductValidation = require('../../helpers/postProductValidation');

const postProduct = async (name, description, imagenURL, price, stock, category, gender) => {


    const newProduct = await Product.create({
        name,
        description,
        image: imagenURL,
        price,
        stock,
        category,
        gender
    });

    if (!newProduct) throw new Error(`El producto ${name} no pudo crearse.`);
    return `El producto ${name} se creó exitosamente.`;
};

module.exports = postProduct;