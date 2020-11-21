const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserInfo = new Schema({
  name: String,
  googleId: String,
  email: String,
  userImage: String,
});
mongoose.model("users", UserInfo);
