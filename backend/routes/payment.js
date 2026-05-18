import express from 'express';
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/create-intent', auth, async (req, res) => {
  try {
    const { amount, orderId } = req.body;
    res.json({ clientSecret: 'test_secret', paymentIntentId: 'test_id_' + Date.now() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/confirm-payment', auth, async (req, res) => {
  try {
    const { orderId, paymentIntentId } = req.body;
    const order = await Order.findById(orderId);
    order.paymentStatus = 'completed';
    order.stripePaymentId = paymentIntentId;
    await order.save();
    await Cart.findOneAndUpdate({ userId: req.user.id }, { items: [], totalPrice: 0 });
    res.json({ message: 'Payment successful', order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
