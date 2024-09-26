import express from 'express';
import {
    getProductDetail,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controller/productController.js';

const productRoute = express.Router();

// Define your routes here
productRoute.get('/getProductDetail/:product_id', getProductDetail);
productRoute.post('/createProduct', createProduct);
productRoute.put('/updateProduct/:product_id', updateProduct);
productRoute.delete('/deleteProduct/:product_id', deleteProduct);

export default productRoute;
