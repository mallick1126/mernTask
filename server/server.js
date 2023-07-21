require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user.model");
const userRoute = require("./routes/user.route");
const port = process.env.PORT;

// connection to the database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Db connected successfully`);
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5174",
  })
);

app.use("/", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
