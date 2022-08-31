const Login = require("../models/LoginModel");

exports.logar = (req, res) => {
  res.send("Usuario registrado");
};

exports.register = async (req, res) => {
  const login = new Login(req.body);
  await login.register();
  if (login.errors.length > 0) {
    login.errors.forEach((element) => {
      res.send(element);
    });
  } else {
    res.send(login);
  }
};
