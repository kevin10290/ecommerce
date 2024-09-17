// controllers/orderController.js
import Order from '../models/Order.js';

const OrderController = {
  // Crear un nuevo pedido
  async createOrder(req, res) {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtener todos los pedidos
  async getOrders(req, res) {
    try {
      const orders = await Order.find().populate('usuarioId productos.productoId');
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtener un pedido por ID
  async getOrderById(req, res) {
    try {
      const order = await Order.findById(req.params.id).populate('usuarioId productos.productoId');
      if (!order) return res.status(404).json({ error: 'Order not found' });
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Actualizar un pedido
  async updateOrder(req, res) {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) return res.status(404).json({ error: 'Order not found' });

      Object.assign(order, req.body);
      await order.save();
      
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Eliminar un pedido
  async deleteOrder(req, res) {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) return res.status(404).json({ error: 'Order not found' });
      await order.remove();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default OrderController;
