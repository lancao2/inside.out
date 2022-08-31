const express = require('express');
const route = express.Router();
const UserControler = require('./src/controllers/UserControler')

route.post('/register' , UserControler.register)
route.post('/login', UserControler.login)

module.exports = route;