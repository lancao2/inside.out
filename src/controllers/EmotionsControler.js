
const Emotion = require("../models/EmotionsModel")

exports.listEmotions = async (req, res) => {
  data = new data()
  try {
    res.send(req.body)
    
  } catch (error) {
    
    return res.status(400).send('error: emotion is not fund')
  }
};

exports.addEmotion = async (req, res) => {
  const emotions = [
    ":ANGRY:",
    ":HAPPY:",
    ":SAD:",
    ":TENSE:",
    ":FINE:",
    ":FLIRTY:",
  ];
  try {
    if (!emotions.includes(req.body.emotion)) {
      return res.status(404).send('error: this emotion does not exist')
    }
    const objEmotion = new Emotion(req._id, req.body)
    await objEmotion.createEmotion()
    return res.status(201).send("successful: new emotion is posted");
  } catch (error) {
    return res.status(400).send("error: Error to add a new emotion");
  }
};

