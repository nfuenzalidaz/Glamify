const { Testimony, User } = require('../../db');

const createTestimonyController = async (comment, id) => {
    try {
        const user = await User.findByPk(id);

        const existTestimony = await Testimony.findOne({
            where: {
                userId: id,
            },
        });

        if (existTestimony) {
            throw new Error('El usuario puede tener solo 1 testimonio');
        }

        const testimony = await Testimony.create({
            name: user.name,
            comment: comment,
            image: user.image,
        });

        await testimony.setUser(user);

        return testimony;
    } catch (error) {
        console.log(error);
        throw new Error('Error al crear testimonio');
    }
};

module.exports = { createTestimonyController };
