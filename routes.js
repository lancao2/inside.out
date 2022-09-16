const { Router } = require('express');
const express = require('express');
const route = express.Router();
const UserControler = require('./src/controllers/UserControler')
const EmotionsControler = require('./src/controllers/EmotionsControler')

const loginRequired = require('./src/middlewares/loginRequired')

route.post('/register' , UserControler.register)
route.post('/login', UserControler.login)

route.get("/emotions", loginRequired.loginRequired, EmotionsControler.listEmotions)
route.post('/emotions',  loginRequired.loginRequired, EmotionsControler.addEmotion)



module.exports = route;