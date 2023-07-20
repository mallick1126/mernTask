require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const userRoute = require("./routes/user.route");
const port = process.env.PORT;

// connection to the database
// mongoose
//   .connect("mongodb://localhost/users_db", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log(`Db connected successfully`);
//   })
//   .catch((error) => {
//     throw error;
//   });

const app = express();

app.use(express.json());
app.use("/", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
