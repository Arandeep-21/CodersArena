const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserInfo = new Schema({
  name: String,
  googleId: String,
  email: String,
  userImage: String,
});
mongoose.model("users", UserInfo);
const chatSchema = mongoose.Schema({
  message: String,
  name: String,
  timeStamp: String,
  received: String,
});
mongoose.model("chats", chatSchema);
