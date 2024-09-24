import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  modelName: {
    type: String,
    required: [true, "model field is required"],
  },
  model: {
    type: String,
    required: [true, "model is required"],
  },
  company: {
    type: String,
    required: [true, "company is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  expiry: {
    type: String,
    required: [true, "expiry is required"],
  },
});
let productModel = mongoose.model("products", productSchema);
export default productModel;