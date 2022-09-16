// const mongoose = require("mongoose");

// const EmotionsSchema = new mongoose.Schema({
//   _id: {type: Number, required: true},
//   emotion: { type: String, required: true },
//   date: {type: mongoose.Schema.Types.Date},
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   }
// });

// const EmotionsModel = mongoose.model("Emotions", EmotionsSchema);

// class Emotion{
//   constructor(req, body){
//     this._id = 1
//     this.emotion = body.emotion
//     this.data = new Date().toLocaleString();
//     this.userId= req._id
//   }

//   async newId() {
//     let newId = Math.floor(Math.random() * 100);
//     this._id = await registerModel.findOne({ Id: this.body._id });
//     while (newId === this.Id) {
//       newId = Math.floor(Math.random() * 100);
//     }
//     this._id = newId;
//   }
//   crate(){
//     this.newId()
//     const emotion = await EmotionsModel.create({
//       _id: this.Id,
//       emotion: this.body
      
//     })
//   }

// }

// module.exports = Emotion

