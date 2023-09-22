const postProduct = require('../../controllers/product/postProduct');
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const storage = multer.memoryStorage();
const upload = multer({ storage });

const postProductHandler = async (req, res) => {
  const { name, description, price, stock, category, gender } = req.body;

  try {
    const imagenDataUri = `data:${
      req.files[0].mimetype
    };base64,${req.files[0].buffer.toString("base64")}`;
    const imagen = await cloudinary.uploader.upload(imagenDataUri, {
      folder: "GlamifyApp",
    });

    const createdProduct = await postProduct(
      name,
      description,
      imagen.secure_url,
      price,
      stock,
      category,
      gender
    );
    return res.status(201).json({ message: createdProduct });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = postProductHandler;
