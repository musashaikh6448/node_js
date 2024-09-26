import ProductModel from '../model/productModel.js';

// Service to get product details by product ID
export const getProductByIdService = async (productId) => {
    return await ProductModel.findById(productId);
};

// Service to create a new product
export const createProductService = async (productData) => {
    const newProduct = new ProductModel(productData);
    return await newProduct.save();
};

// Service to update a product by ID
export const updateProductByIdService = async (productId, updatedData) => {
    return await ProductModel.findByIdAndUpdate(productId, updatedData, { new: true });
};

// Service to delete a product by ID
export const deleteProductByIdService = async (productId) => {
    return await ProductModel.findByIdAndDelete(productId);
};
