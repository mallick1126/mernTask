require("dotenv").config();
const express = require("express");
const User = require("./models/user.model");
const port = process.env.PORT;

const app = express();

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
