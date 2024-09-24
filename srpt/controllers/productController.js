import fs from "fs";
import bodyParser from "body-parser";
import express from "express";
let app = express();
import {
  createProductServices,
  getProductDetailsServices,
  // updateProductServices,
} from "../services/productServices.js";
// import productModel from "../models/producModel.js";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//.........................................................................................
export let createProductController = async (req, res) => {
  let productDetails = req.body;

  try {
    let status = await createProductServices(productDetails);
    //   fs.appendFile("product.txt", "\n" + JSON.stringify(data), (err) => {
    //     if (err) {
    //       console.log("error while data transfering ");
    //     } else {
    //       console.log("data transfer successfully");
    //     }
    //   });
    console.log(productDetails);

    res.send("product created successfully");
  } catch (error) {
    // console.log(error);
    res.send("oops error while creating product");
  }
};
//......................................................................................

export let getProductDetailsController = async (req, res) => {
  let details = req.params.productId;

  let productDetails = await getProductDetailsServices(details);

  res.send(JSON.stringify(productDetails));
};
//...............................................................................

// export let updateProductController = async (req, res) => {
//   try {
//     let productId=req.params.productId
//   let productUpdate=req.body
//   await productModel.findByIdAndUpdate({productId:productId},productUpdate,{new:true})
//   .then((productUpdate)=>{
//     console.log(productUpdate);
//     res.status(500).json({msg:"product successfully update",contact:update})
    
//   })
//   } catch (error) {
    
//   }
// };
