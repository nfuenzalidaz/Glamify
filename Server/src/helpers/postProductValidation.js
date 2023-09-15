const nameRegex = /^[a-zA-Z0-9\s]+$/;
const priceRegex = /^[+-]?\d+(\.\d{1,2})?$/;
const imageRegex = /^.+\.(jpeg|jpg|png)$/;
const imageRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
const stockRegex = /^[0-9]+$/;

const postProductValidation = (name, description, image, price, category, stock) => {

    // name
    if (!nameRegex.test(name)) throw new Error(`El nombre ${name} no es válido para crear el producto.`);
    if (name === "" || name.length === 0) throw new Error(`Es necesario que el campo producto no este vacio para poder crearlo.`);
    if (name.length > 50) throw new Error(`El nombre del producto solo puede contener máximo 50 caracteres.`);

    // description
    if (description === '' || description.length > 255) throw new Error('La descripción del producto debe tener entre 1 y 255 caracteres.');

    //image
    // if (image.length === '') throw new Error('Es necesario que el producto contenga una imagen para poder crearlo.');
    // if (!imageRegex.test(image) || !imageRegexURL.test(image)) throw new Error('La imagen debe ser una URL válida o tener un formato jpg, jpeg, png');

    // price
    if (!priceRegex.test(price)) throw new Error('El precio debe ser de tipo numérico o decimal para poder crear el producto.');
    if (price === "") throw new Error('El campo precio del producto no puede estar vacío. Digite un valor poder crear el producto.');

    // category
    // if (!category || category.length > 50) throw new Error('La categoría del producto es obligatoria y debe tener menos de 50 caracteres.');

    // stock
    // if (!stockRegex.test(stock)) throw new Error('El stock no es válido para crear el producto.');

}

module.exports = postProductValidation;