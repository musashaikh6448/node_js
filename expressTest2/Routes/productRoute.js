import express from 'express';
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/productController.js';
const productRoute = express.Router();

productRoute.post('/createProduct', createProduct);
productRoute.put('/updateProduct/:id', updateProduct);
productRoute.delete('/deleteProduct/:id', deleteProduct);
productRoute.get('/getProduct', getProduct);

export default productRoute;