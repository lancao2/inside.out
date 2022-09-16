const mongoose = require("mongoose");

const EmotionsSchema = new mongoose.Schema({
  _id: {type: Number, required: true},
  emotion: { type: String, required: true },
  date: {type: String, required: true},
  userId: {
    type: Number,
    ref: 'User',
    required: true
  }
});

const EmotionsModel = mongoose.model("Emotions", EmotionsSchema);

class Emotion{
  constructor(req, body){
    this._id = 1
    this.emotion = body.emotion
    this.data = new Date().toLocaleString();
    this.userId= req
  }
  
  async newId() {
    let checkEmotionId = await EmotionsModel.findOne({_id: this._id});
    const newId = Math.floor(Math.random() * 100);
    while (checkEmotionId && newId === checkEmotionId._id ) {
      newId = Math.floor(Math.random() * 100);
      this._id = newId;
    }
    this._id = newId
  }

  async createEmotion(){
    await this.newId()
    const emotion = await EmotionsModel.create({
      _id: this._id,
      emotion: this.emotion,
      date: this.data,
      userId: this.userId
    })
    return
  }

}

module.exports = Emotion

