import mongoose, { Schema} from "mongoose";

const userSchema = new Schema({
  user:{type: String, ref: "Users", require: true},
  friendId:{type: String, ref: "Users", require: true},
  isFriend:{type: Boolean,  require: true}
});

export const FriendModel = mongoose.model("Friends", userSchema);