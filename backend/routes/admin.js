import express from 'express';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import User from '../models/User.js';
import { adminAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/products', adminAuth, async (req, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body;
    const product = new Product({ name, description, price, image, category, stock });
    await product.save();
    res.status(201).json({ message: 'Product added', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/products/:id', adminAuth, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Updated', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/products/:id', adminAuth, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/orders', adminAuth, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/stats', adminAuth, async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const revenueData = await Order.aggregate([{ $group: { _id: null, total: { $sum: '$totalPrice' } } }]);
    res.json({ totalOrders, totalUsers, totalProducts, totalRevenue: revenueData[0]?.total || 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
