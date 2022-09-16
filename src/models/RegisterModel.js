const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  username: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  emotions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Emotions",
    },
  ],
});

const registerModel = mongoose.model("User", UserSchema);

class register {
  constructor(body) {
    this.Id = 1;
    this.body = body;
    this.errors = [];
    this.user = null;
    this.token= ''
  }

  async register() {
    this.validate();
    
    if (this.errors.length > 0) return;

    await this.userExists();

    if (this.errors.length > 0) return;

    const salt = bcrypt.genSaltSync();
    this.body.password = bcrypt.hashSync(this.body.password, salt);
    this.user = await registerModel.create({
      _id: this.Id,
      username: this.body.username,
      mail: this.body.mail,
      password: this.body.password,
    });
  }

  async userExists() {
    this.user = await registerModel.findOne({ mail: this.body.mail });
    if (this.user) this.errors.push("user already exist");
  }

  async newId() {
    let newId = Math.floor(Math.random() * 100);
    this.Id = await registerModel.findOne({ Id: this.body._id });
    while (newId === this.Id) {
      newId = Math.floor(Math.random() * 100);
    }
    this.Id = newId;
  }

  validate() {
    this.newId();
    this.manage();
    console.log(this.body.mail);
    if (!validator.isEmail(this.body.mail)) {
      this.errors.push("invalid email");
    }
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
  UserSchema,
};

module.exports = UserRegister;
