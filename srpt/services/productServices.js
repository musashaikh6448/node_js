import productModel from "../models/producModel.js";
import express from 'express'
let app=express()
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

export let createProductServices = async (product) => {
  try {
    let product1 = new productModel(product);
    let data = await product1.save();

    return "success";
  } catch (error) {}
};
//.........................................

export let getProductDetailsServices = (productId) => {
  try {
    let data = productModel.findOne({ productId: productId });

    return data;
  } catch (error) {
    console.log("only log");
  }
};
//...............................................
// export let updateProductServices = (point) => {
//   let data = productModel.updateOne(point);
//   return data;
// };

