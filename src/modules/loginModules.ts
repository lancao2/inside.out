import mongoose from "mongoose";
import  jwt  from "jsonwebtoken";
import bcript, { hash } from "bcryptjs";
import { UserRegister } from "./registerModules";
import { UserModel } from "../models/userModel";
import {auth} from "../config/index"

export class UserLogin extends UserRegister {
  token: string;
  dbUser: any;
  constructor(body: { email: string; password: string, emotions: Array<string>}) {
    super(body);
    this.token = "";
    this.dbUser = "";
  }

  async authorization() {
    this.dbUser = await UserModel.findOne({ email: this.email });
    if (!this.dbUser) {
      this.errors.push("Usuario não encontrado");
    }
    if (!bcript.compareSync(this.password, this.dbUser.password)) {
      this.errors.push("password is invalid");
      return;
    }
    this.token = jwt.sign({id: this.dbUser._id}, auth.secret, {expiresIn: auth.expires})
  }
}
