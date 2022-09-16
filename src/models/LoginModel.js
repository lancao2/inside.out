const mongoose = require("mongoose");
const UserRegister = require("../models/RegisterModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv/config");

const loginModel = mongoose.model("User", UserRegister.UserSchema);

class login extends UserRegister.register {
  constructor(body) {
    super(body);
    this.token = ""
  }

  async toLogin(mail, password) {
    this.validate();
    if (this.errors.length > 0) return;
    this.user = await loginModel.findOne({mail});

    if (!this.user) {
      this.errors.push("Email or password is invalid");
      
    }
    if (!bcrypt.compareSync(password, this.user.password)) {
      this.errors.push("Email or password is invalid");
      return;
    }
    this.user.password = undefined;

    this.token = jwt.sign({_id: this.user._id}, process.env.SECRET_TOKEN, {
       expiresIn:  process.env.EXPIRATION_TOKEN
    })
  }

}

module.exports = login;
