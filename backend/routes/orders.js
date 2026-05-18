import express from 'express';
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, userId: req.user.id });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/create', auth, async (req, res) => {
  try {
    const { shippingAddress } = req.body;
    const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    if (!cart || cart.items.length === 0) return res.status(400).json({ error: 'Cart empty' });
    const order = new Order({
      userId: req.user.id,
      items: cart.items.map(i => ({ productId: i.productId._id, name: i.productId.name, price: i.price, quantity: i.quantity })),
      totalPrice: cart.totalPrice,
      shippingAddress,
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    });
    await order.save();
    res.status(201).json({ message: 'Order created', order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { orderStatus: status, updatedAt: new Date() }, { new: true });
    res.json({ message: 'Status updated', order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
