const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const mongoDB = process.env.MONGO_DB;

const connect = async () => {
  try {
    const DB = await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = DB.connection;
    console.log(`Connected to ${name} DB in host ${host}`);
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

module.exports = {connect}
