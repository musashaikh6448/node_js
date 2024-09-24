import { get } from "mongoose"
import orderModel from "../Model/orderModel.js"

export const createOrder = async (req, res) => {
    try {
        const {orderNumber, address, price, gst} = req.body
        if (!orderNumber || !address || !price ||!gst) {
            res.status(400).json({
                success : false,
                message : "all fields are required"
            })
        };
        const orderData = await orderModel.create({
            orderNumber,
            address,
            price,
            gst
        })
        res.status(201).json({
            success : true,
            message : "order created successfully",
            order : orderData
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : "error while creating order",
            error : error.message   
        })
    }
}

export const updateOreder = async (req, res) => {
    try {
        const id = req.params.id;
        const updateOreder = await orderModel.findByIdAndUpdate(id, req.body);
        if (!updateOreder) {
            res.status(400).json({
                success : false,
                message : "Invalid Order"
            })
        }
        res.status(200).json({
            success : true,
            message : "User updated successfully",
            data : updateOreder
        })
    } catch (error) {
        res.status(401).json({
            success :false,
            message : "error while updating order",
            error : error.message
        })
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteOrder = await orderModel.findByIdAndDelete(id);
        if (!deleteOrder) {
            res.status(400).json({
                success : false, 
                message : "Invalid order"
            })
        }
        res.status(200).json({
            success : true,
            message : "order deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : "error while deleting order",
            error : error.message
        })
    }
};

export const getOrder = async (req, res) => {
    try {
        const getOrder = await orderModel.find();
        res.status(201).json({
            success : true,
            message : "got order data",
            data : getOrder
        })
    } catch (error) {
        res.status(401).json({
            success : false,
            message : "error while getting order data",
            error : error.message
        })
    }
}