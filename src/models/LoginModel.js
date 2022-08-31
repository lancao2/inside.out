const mongoose = require("mongoose");
const validator = require("validator");

const loginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
});

const loginModel = mongoose.model("login", loginSchema);

class login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }
  async register() {
    this.validate();
    if (this.errors.length > 0) return;
    try {
      this.user = await loginModel.create(this.body);
    } catch (err) {
      console.log(err);
    }
  }
  validate() {
    this.manage();
    if (!validator.isEmail(this.body.mail)) this.errors.push("invalid email");
    if (this.body.password.length < 5 || this.body.password.length > 20) {
      this.errors.push("incorrect amount of characters");
    }
  }
  manage() {
    for (let i in this.body) {
      if (typeof this.body[i] !== "string") {
        this.body[i] = "";
      }
    }
    this.body = {
      username: this.body.username,
      mail: this.body.mail,
      password: this.body.password
    };
  }
}

module.exports = login;
