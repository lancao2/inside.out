const login = require("../models/LoginModel");
const UserRegister = require("../models/RegisterModel");
const session = require("express-session");


exports.login = async (req, res) => {
  try {
    const Login = new login(req.body);
    await Login.toLogin();
    if (Login.errors.length > 0) {
      Login.errors.forEach((element) => {
        res.send(element);
      });
    } else {
      res.send(Login.user); 
    }
  } catch (err) {
    console.log(err);
    res.send("error: 404");
  }
};

exports.register = async (req, res) => {
  try {
    const Register = new UserRegister.register(req.body);
    await Register.register();
    if (Register.errors.length > 0) {
      Register.errors.forEach((element) => {
        res.send(element);
        return
      });
    } else {
      res.send(Register.user);
      
    }
  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
};
