const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPasword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
model.exports = User;
