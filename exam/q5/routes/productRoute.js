import express from "express";
import {
  getproduct,
  postproduct,
  putproduct,
  patchproduct,
  deleteproduct,
} from "../controller/productController.js";

const productRoute = express.Router();

productRoute.get("/getproduct", getproduct);
productRoute.post("/getproduct", postproduct);
productRoute.put("/getproduct", putproduct);
productRoute.patch("/getproduct", patchproduct);
productRoute.delete("/getproduct", deleteproduct);

export default productRoute;
