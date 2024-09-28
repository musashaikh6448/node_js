import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  firstname: { type: String, trim: true, required: true },
  surname: { type: String, trim: true, required: true },
  address: { type: String, trim: true, required: true },
  mobile: { type: String, trim: true, unique: true, required: true },
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, trim: true, required: true },
});
let userModel = mongoose.model("user", userSchema);

export default userModel;
