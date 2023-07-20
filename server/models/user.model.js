const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid email format",
      },
    },
    age: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
