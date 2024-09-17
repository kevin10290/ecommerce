// controllers/cartController.js
import Cart from '../models/Cart.js';

const CartController = {
  // Crear un carrito (si no existe uno)
  async createCart(req, res) {
    try {
      const cart = await Cart.create(req.body);
      res.status(201).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtener el carrito de un usuario
  async getCartByUserId(req, res) {
    try {
      const cart = await Cart.findOne({ usuarioId: req.params.usuarioId }).populate('productos.productoId');
      if (!cart) return res.status(404).json({ error: 'Cart not found' });
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Actualizar el carrito (agregar productos)
  async updateCart(req, res) {
    try {
      const cart = await Cart.findOne({ usuarioId: req.params.usuarioId });
      if (!cart) return res.status(404).json({ error: 'Cart not found' });

      cart.productos = req.body.productos; // Reemplaza los productos
      await cart.save();
      
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Eliminar un carrito
  async deleteCart(req, res) {
    try {
      const cart = await Cart.findOne({ usuarioId: req.params.usuarioId });
      if (!cart) return res.status(404).json({ error: 'Cart not found' });
      await cart.remove();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default CartController;
