
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productos: [
    {
      productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      nombre: String,
      cantidad: Number,
      precio: Number
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
