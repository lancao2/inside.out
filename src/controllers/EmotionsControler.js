
const Emotion = require("../models/EmotionsModel")

exports.listEmotions = async (req, res) => {
  try {
    await res.send(req.body)
    
  } catch (error) {
    console.log(error)
    return res.status(400).send('error: emotion is not fund')
  }
};

exports.addEmotion = (req, res) => {
   res.send(req.body)
  // const emotions = [
  //   ":ANGRY:",
  //   ":HAPPY:",
  //   ":SAD:",
  //   ":TENSE:",
  //   ":FINE:",
  //   ":FLIRTY:",
  // ];
  // try {
  //   if (!emotions.includes(req.body.emotion)) {
  //     return res.status(404).send('error: emotion is not fund')
  //   }
  //   const objEmotion = new EmotionsModel.Emotion(req._id, req.body)
  //   const emotion = await EmotionsModel.create({user: req._id, ...req.body });
  //   res.send(emotion)
  // } catch (error) {
  //   return res.status(400).send("error: Error to add a new emotion");
  // }
};

exports.editEmotion = async (req, res) => {
  res.send("editando");
};
