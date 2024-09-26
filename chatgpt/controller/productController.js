import { createProductService, deleteProductByIdService, getProductByIdService, updateProductByIdService } from '../service/productServices.js';


// Get product details by product ID
export const getProductDetail = async (req, res) => {
    try {
        const product = await getProductByIdService(req.params.product_id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const savedProduct = await createProductService(productData);
        res.json({ message: 'Product created successfully', productid: savedProduct._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
    try {
        const updatedData = req.body;
        const updatedProduct = await updateProductByIdService(req.params.product_id, updatedData);

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await deleteProductByIdService(req.params.product_id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
