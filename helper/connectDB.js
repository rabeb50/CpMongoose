const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = () => {
  //Connect to database
  mongoose.connect(
    process.env.MONGO_URI,
       (err) => {
      if (err) {
        console.log(err);
      } else console.log("database connected");
    }
  );
};
module.exports = connectDB;
