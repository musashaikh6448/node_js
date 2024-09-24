import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
 
  name: { type: String },
  model: { type: String },
  company: { type: String },
  price: { type: Number },
 
});

let productModel = mongoose.model("product", productSchema);

export default productModel;

