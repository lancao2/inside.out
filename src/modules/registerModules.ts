import mongoose, { Schema, model, connect } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { ReturnDocument } from "mongodb";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false },
});

const registerModel = mongoose.model("Users", userSchema);

export class UserRegister {
  name: string;
  email: string;
  password: string;
  errors: Array<string>;

  constructor(body: {
    name: string;
    email: string;
    password: string;
  }) {
    this.name = body.name
    this.email = body.email
    this.password = body.password
    this.errors = []
  }

  async register() {
    await this.validate()

    if(this.errors.length > 0)return

    const salt = bcrypt.genSaltSync();
    this.password = bcrypt.hashSync(this.password, salt);

    await registerModel.create({
      name: this.name,
      email: this.email,
      password: this.password
    })
  }

  async validate(){
    if(!validator.isEmail(this.email)){
      this.errors.push("Insira um emali valido")
    }
    if(this.password.length < 5){
      this.errors.push("a senha possue poucos caracteres")
    }
    const user = await registerModel.findOne({email: this.email})
    if(user){
      this.errors.push("usuario já existente")
    }
  }
}
