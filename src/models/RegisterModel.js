const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  friends: [],
  emotions: [],
});

const registerModel = mongoose.model("User", UserSchema);

class register {
  constructor(body) {
    this.body = body;
    this.emotions = [];
    this.friends = [];
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.validate();
    if (this.errors.length > 0) return;

    await this.userExists();

    if (this.errors.length > 0) return;

    const salt = bcrypt.genSaltSync();
    this.body.password = bcrypt.hashSync(this.body.password, salt);
    this.user = await registerModel.create(this.body);
  }

  async userExists() {
    this.user = await registerModel.findOne({ mail: this.body.mail });
    if (this.user) this.errors.push("user already exist");
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
      password: this.body.password,
    };
  }
}

const UserRegister = {
  register,
  UserSchema
}

module.exports = UserRegister;
