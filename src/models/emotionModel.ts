import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User", require: true},
  emotion: {type: String, require: true},
  uploadDate: {type: String, require: true}
});

export const EmotionModel = mongoose.model("Emotions", userSchema);
