import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  productId: { type: Number, required: true },  //,unique:true
  name: { type: String },
  model: { type: String },
  company: { type: String },
  price: { type: Number },
  tax: { type: Number },
  expiryDate: { type: Number },
});

let productModel = mongoose.model("product", productSchema);

export default productModel;
