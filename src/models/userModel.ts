import mongoose, { Schema, model, connect } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false },
});

export const UserModel = mongoose.model("Users", userSchema);
