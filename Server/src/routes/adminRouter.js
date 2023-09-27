const { Router } = require('express');
const postAdminHandler = require('../handlers/admin/postAdminHandler');
const getAdminByNameHandler = require('../handlers/admin/getAdminByNameHandler');

const adminRouter = Router();

adminRouter.get('/', getAdminByNameHandler);
adminRouter.post('/', postAdminHandler);

module.exports = adminRouter;
