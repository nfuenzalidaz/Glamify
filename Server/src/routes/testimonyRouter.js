const { Router } = require('express');
const {
    getAllTestimonies,
    getTestimonyById,
    createTestimony,
    deleteTestimony,
    updateTestimony,
} = require('../handlers/testimony/testimonyHandlers');


const testimonyRouter = Router();

testimonyRouter.get('/', getAllTestimonies);
testimonyRouter.get('/:id', getTestimonyById);
testimonyRouter.post('/:id', createTestimony);
testimonyRouter.delete('/:id', deleteTestimony);
testimonyRouter.put('/:id', updateTestimony);

module.exports = testimonyRouter;
