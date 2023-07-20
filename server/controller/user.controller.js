const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const { generatToken } = require("../auth/jwt");

exports.createUser = async (req, res) => {
  try {
    const { name, email, age, phoneNumber } = req.body;
    if (!name || !email || !age || !phoneNumber) {
      res.status(400).json({ error: `Missing required fields` });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(422).json({ error: `User already exist` });
    }

    generatToken(email);
    const user = new User({
      name,
      email,
      age,
      phoneNumber,
    });

    await user.save();
    res.status(200).json({ message: `User created successfully`, user });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      res.status(404).json({ message: `No user found` });
    }

    res.status(200).json({ users: users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: `Internal server error` });
  }
};
