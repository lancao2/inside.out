const express = require('express');
const route = express.Router();
const UserControler = require('./src/controllers/UserControler')

route.get('/', UserControler.logar)
route.post('/register' , UserControler.register)

module.exports = route;