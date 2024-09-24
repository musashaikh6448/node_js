import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL + process.env.DBNAME);
    console.log("connected to db");
  } catch (error) {
    console.log("error while connecting to DB" + error);
  }
};

export default connectDb;