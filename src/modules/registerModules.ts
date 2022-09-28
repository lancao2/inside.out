import validator from "validator";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import { UserModel } from "../models/userModel";
import { auth } from "../config";


export class UserRegister {
  name?: string;
  email: string;
  password: string;
  emotions: Array<string>;
  errors: Array<string>;
  token: string;
  dbUser: any;

  constructor(body: {
    name?: string;
    email: string;
    password: string;
    emotions: Array<string>
    
  }) {
    this.name = body.name;
    this.email = body.email;
    this.password = body.password;
    this.emotions = [];
    this.errors = [];
    this.token = ""
    this.dbUser = ''
  }

  async register() {
    await this.validate();

    if (this.errors.length > 0) return;

    const salt = bcrypt.genSaltSync();
    this.password = bcrypt.hashSync(this.password, salt);

    await UserModel.create({
      name: this.name,
      email: this.email,
      password: this.password,
      emotions: this.emotions,
    });

    this.dbUser = await UserModel.findOne({ email: this.email })
  }

  async validate() {
    if (!this.name) {
      this.errors.push("Nome de usuario não inserido");
      return
    }
    if (!validator.isEmail(this.email)) {
      this.errors.push("Insira um emali valido");
      return
    }
    if (this.password.length < 5) {
      this.errors.push("a senha possue poucos caracteres");
      return
    }
    const user = await UserModel.findOne({ email: this.email });
    if (user) {
      this.errors.push("usuario já existente");
      return
    }
    
  }

  giveToken(){
    this.token = jwt.sign({id: this.email}, auth.secret, {expiresIn: auth.expires})
  }
}
