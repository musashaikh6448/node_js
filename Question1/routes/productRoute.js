import exppress from "express";
import {
  createProductController,
  getProductDetailsController,
  // updateProductController,
} from "../controllers/productController.js";
const productRoute = exppress.Router();

productRoute.post("/createProduct", createProductController);
productRoute.get("/getproductDetail/:productId", getProductDetailsController);
// productRoute.put("/updateProduct", updateProductController);

export default productRoute;
