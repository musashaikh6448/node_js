import mongoose from "mongoose";
let dbconnect = async (dbUrl, dbName) => {
  try {
    mongoose.connect(dbUrl+dbName);
    console.log("database connected successfully");
  } catch (error) {
    console.log(`error while database connecting ${error}`);
  }
};

export default dbconnect
