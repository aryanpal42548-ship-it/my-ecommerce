import express from 'express';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [] });
      await cart.save();
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/add', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) cart = new Cart({ userId: req.user.id, items: [] });
    const item = cart.items.find(i => i.productId.toString() === productId);
    if (item) {
      item.quantity += parseInt(quantity);
    } else {
      cart.items.push({ productId, quantity: parseInt(quantity), price: product.price });
    }
    cart.totalPrice = cart.items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    await cart.save();
    res.json({ message: 'Item added', cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/update/:productId', auth, async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    const item = cart.items.find(i => i.productId.toString() === req.params.productId);
    if (!item) return res.status(404).json({ error: 'Item not in cart' });
    if (quantity <= 0) {
      cart.items = cart.items.filter(i => i.productId.toString() !== req.params.productId);
    } else {
      item.quantity = parseInt(quantity);
    }
    cart.totalPrice = cart.items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    await cart.save();
    res.json({ message: 'Updated', cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/remove/:productId', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    cart.items = cart.items.filter(i => i.productId.toString() !== req.params.productId);
    cart.totalPrice = cart.items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    await cart.save();
    res.json({ message: 'Removed', cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/clear', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (cart) {
      cart.items = [];
      cart.totalPrice = 0;
      await cart.save();
    }
    res.json({ message: 'Cleared', cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
