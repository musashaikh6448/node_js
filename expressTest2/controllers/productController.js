import productModel from "../Model/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const { modelName, model, company, price, expiry } = req.body;
    if (!modelName || !model || !company || !price || !expiry) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const createProduct = await productModel.create({
      modelName,
      model,
      company,
      price,
      expiry,
    });

    res.status(201).json({
      success: true,
      message: "product added successfully",
      data: createProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error while creating product",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "procuct updated successfully",
      data: productData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error while updating product data",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await productModel.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(400).json({
        success: false,
        message: "invalid product",
      });
    }
    res.status(201).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error while deleting user",
      error: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const getProduct = await productModel.find();
    console.log(getProduct);
    res.status(201).json({
      success: true,
      message: "got users details",
      data: getProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error while getting user",
      error : error.message
    });
  }
};