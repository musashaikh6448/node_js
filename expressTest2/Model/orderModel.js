import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  orderNumber: {
    type: Number,
    required: [true, "urder number is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  gst: {
    type: String,
    required: [true, "gst is required"],
  },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
