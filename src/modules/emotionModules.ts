
import { defultEmotions } from "../config/index";
import { EmotionModel } from "../models/emotionModel";
import { UserModel } from "../models/userModel";


export class Emotion {
  user: string;
  emotion: string;
  uploadDate: string;
  errors: Array<string>;
  dbUser: any;
  constructor(req:any) {
    this.user = req.userId;
    this.emotion = req.body.emotion;
    this.uploadDate = "";
    this.dbUser = "";
    this.errors = [];
  }

  async uploadEmotion() {
    this.emotionValidator();
    this.currentDate();

    if(this.errors.length >0) return

    await EmotionModel.create({
        user: this.user,
        emotion: this.emotion,
        uploadDate: this.uploadDate
    })
  }

  async emotionValidator() {
    if (!this.user) {
      this.errors.push("A emoção nao possue um usuario");
    }

    if (!defultEmotions.includes(this.emotion)) {
      this.errors.push("Emoção invalida");
    }

    this.dbUser = await UserModel.findOne({ _id: this.user });
    if (!this.dbUser) {
      this.errors.push("Usuario não encontrado");
    }
  }

  currentDate() {
    let date = new Date();
    this.uploadDate = `${date.getDate()} ${1+date.getMonth()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  }
}
