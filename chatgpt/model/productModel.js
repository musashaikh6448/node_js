import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productname: { type: String, required: true },
    model: { type: String, required: true },
    company: { type: String, required: true },
    price: { type: Number, required: true },
    tax: { type: Number, required: true },
    expiry: { type: Date, required: true }
}, { timestamps: true });

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
