const getAllProduct = require('../../controllers/product/getAllProduct');
const getProductById = require('../../controllers/product/getProductById');
const getProductByName = require('../../controllers/product/getProductByName');
const deleteProduct = require('../../controllers/product/deleteProduct');

const getAllProductHandler = async (req, res) => {
  const { name } = req.query;

  if (name) {
    //Handler Buscar por Nombre
    try {
      const product = await getProductByName(name);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else if (req.method === 'DELETE') { // Condición para el borrado lógico
    return deleteProductHandler(req, res);
  } else {
    try {
      const products = await getAllProduct();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
// Handler Buscar por ID
const getProductByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await getProductById(id);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteProductHandler = async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedProductMessage = await deleteProduct(id, 'B'); // 'B' indica borrado lógico
    return res.status(200).json({ message: deletedProductMessage });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllProductHandler,
  getProductByIdHandler,
  deleteProductHandler,
};
