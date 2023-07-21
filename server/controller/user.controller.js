const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const { generateToken } = require("../auth/jwt");

exports.createUser = async (req, res) => {
  try {
    const { name, email, age, phoneNumber } = req.body;

    // Validate required fields
    if (!name || !email || !age || !phoneNumber) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(422).json({ error: `User with this email already exist` });
    }

    const token = await generateToken(email);
    console.log(token);
    // Create a new user instance
    const newUser = new User({
      name,
      email,
      age,
      phoneNumber,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(200).json({ message: "user saved", savedUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user." });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }

    res.status(200).json({ users: users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error getting users" });
  }
};
