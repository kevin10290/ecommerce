
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productos: [
    {
      productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      nombre: String,
      cantidad: Number,
      precio: Number
    }
  ],
  total: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  estado: { type: String, enum: ['pendiente', 'enviado', 'entregado'], default: 'pendiente' },
  direcciónEnvío: {
    calle: String,
    ciudad: String,
    códigoPostal: String
  }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
