import mongoose, { Schema} from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false },
  emotions:[{type: mongoose.Schema.Types.ObjectId, ref: "Emotions"}]
});

export const UserModel = mongoose.model("Users", userSchema);
