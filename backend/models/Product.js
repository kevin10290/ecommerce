
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripción: String,
  precio: { type: Number, required: true },
  categoría: { type: String, required: true },
  tallas: [String],
  imágenes: [String],
  stock: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
