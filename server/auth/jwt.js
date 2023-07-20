const jwt = require("jsonwebtoken");

module.exports.generatToken = function generateToken(email) {
  console.log(email);
  const jwtSecretKey = process.env.JWT_SECRET;
  const expiresIn = "7d";

  const token = jwt.sign({ email }, jwtSecretKey, { expiresIn });
  return token;
};
