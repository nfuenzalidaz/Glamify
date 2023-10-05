const updateProduct = require('../../controllers/product/updateProduct');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const storage = multer.memoryStorage();
const upload = multer({ storage });

const updateProductHandler = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, category, gender } = req.body;

  try {
    let updatedProduct;
    if (req.file) {
      const imagenDataUri = `data:${
        req.file.mimetype
      };base64,${req.file.buffer.toString('base64')}`;
      const imagen = await cloudinary.uploader.upload(imagenDataUri, {
        folder: 'GlamifyApp',
      });

      updatedProduct = await updateProduct(
        id,
        name,
        description,
        imagen.url,
        price,
        stock,
        category,
        gender
      );
    } else {
      updatedProduct = await updateProduct(
        id,
        name,
        description,
        undefined,
        price,
        stock,
        category,
        gender
      );
    }

    return res.status(200).json({ message: updatedProduct });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = updateProductHandler;
