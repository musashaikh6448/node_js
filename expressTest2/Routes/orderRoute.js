import express from 'express';
import { createOrder, deleteOrder, getOrder, updateOreder } from '../controllers/orderController.js';
const orderRoute = express.Router();

orderRoute.post('/createOrder', createOrder);
orderRoute.get('/getOrder', getOrder);
orderRoute.put('/updateOrder/:id', updateOreder);
orderRoute.delete('/deleteOrder/:id', deleteOrder);



export default orderRoute;