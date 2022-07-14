const express = require('express');
const router  = express.Router();

const userController    = require('./userController');
const companyController = require('./companyController');

//User routes
router.get('/users', userController.getAll);

router.get('/users/:id', userController.getOne);

router.post('/users', userController.createUser);

router.put('/users/:id', userController.updateUser);

router.delete('/users/:id', userController.deleteUser);

//Company routes
router.get('/companies', companyController.getAll);

router.get('/companies/:id', companyController.getOne);

router.post('/companies', companyController.createCompany);

router.put('/companies/:id', companyController.updateCompany);

router.delete('/companies/:id', companyController.deleteCompany);

module.exports = router;
