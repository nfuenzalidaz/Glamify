const { Product, Purchase, Review } = require('../db');
const { Op } = require('sequelize');

const getAllProducts = async (
    page,
    pageSize,
    category,
    price,
    size,
    name,
    sort,
    color,
    gender,
    active
) => {
    try {
        const offset = (page - 1) * pageSize;
        const limit = pageSize;
        let whereCondition = {};

        if (category) {
            whereCondition.category = category;
        }

        if (size) {
            whereCondition['size.' + size] = {
                stock: {
                    [Op.gt]: 0,
                },
            };
        }

        if (name) {
            whereCondition.name = {
                [Op.iLike]: `%${name}%`,
            };
        }

        if (color) {
            whereCondition.color = color;
        }

        if (gender) {
            whereCondition.gender = gender;
        }


        const savedProducts = await Product.findAndCountAll({
            where: whereCondition,
            offset,
            limit,
            order,
            distinct: true,
            include: [
                {
                    model: Purchase,
                    attributes: ['id', 'productId', 'userId'],
                },
                {
                    model: Review,
                    attributes: [
                        'id',
                        'rating',
                        'comment',
                        'productId',
                        'userId',
                        
                    ],
                },
            ],
        });

        const totalItems = savedProducts.count;
        const totalPages = Math.ceil(totalItems / pageSize);

        if (totalItems === 0) {
            await saveProductsToDatabase();
            return null;
        }

        return {
            products: savedProducts.rows,
            totalItems,
            totalPages,
            currentPage: page,
        };
    } catch (error) {
        throw error;
    }
};

const getProductsById = async (id) => {
    try {
        const product = await Product.findByPk(id, {
            include: [
                {
                    model: Purchase,
                    attributes: ['id', 'productId', 'userId'],
                },
                {
                    model: Review,
                    attributes: [
                        'id',
                        'rating',
                        'comment',
                        'name',
                        'image',
                        'productId',
                        'userId',
                        
                    ],
                },
            ],
        });
        return product;
    } catch (error) {
        console.log(error);
    }
};

const deleteProduct = async (id) => {
    try {
        const product = await Product.findByPk(id);
        await product.update({ active: false });
        return product;
    } catch (error) {
        console.log(error);
    }
};

const createProduct = async (productData) => {
    try {
        const createdProduct = await Product.create(productData);
        return createdProduct;
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Duplicate product');
        }
        throw error;
    }
};


module.exports = {

    getAllProducts,
    getProductsById,
    deleteProduct,
    createProduct,
};
