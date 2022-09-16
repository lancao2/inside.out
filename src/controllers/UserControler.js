const login = require("../models/LoginModel");
const UserRegister = require("../models/RegisterModel");

exports.login = async (req, res) => {
  try {
    const {mail, password} = req.body
    const Login = new login(req.body);
    await Login.toLogin(mail, password);
    if (Login.errors.length > 0) {
      Login.errors.forEach((element) => {
        res.send(element);
      });
    }else{

      res.send({user:Login.user, token: Login.token})
    }
    return console.log("logad")
  } catch (err) {
    res.status(403).send("error: can not to login");
  }
};

exports.register = async (req, res) => {
  try {
    const Register = new UserRegister.register(req.body);
    await Register.register();
    if (Register.errors.length > 0) {
      Register.errors.forEach((element) => {
        res.send(element);
        return;
      });
    } else {
      res.send(Register.user);
    }
  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
};
