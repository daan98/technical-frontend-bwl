const express = require('express');
const userResources = express.Router();
const { UserController } = require('../controllers');

userResources.get('/user', UserController.getUsers);
userResources.get('/user/:id', UserController.getUserById);
userResources.post('/user', UserController.createUser);
userResources.put('/user/:id', UserController.updateUser);

module.exports = userResources;