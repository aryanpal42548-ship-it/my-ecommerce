import express from 'express';
import Product from '../models/Product.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 12, category, search } = req.query;
    let query = {};
    if (category) query.category = category;
    if (search) query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
    ];
    const skip = (page - 1) * limit;
    const products = await Product.find(query).skip(skip).limit(parseInt(limit)).sort({ createdAt: -1 });
    const total = await Product.countDocuments(query);
    res.json({ products, pagination: { total, pages: Math.ceil(total / limit), currentPage: parseInt(page) } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/categories/list', async (req, res) => {
  try {
    const categories = await Product.distinct('category');
    res.json({ categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:id/reviews', auth, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    product.reviews.push({ userId: req.user.id, rating, comment, createdAt: new Date() });
    const avgRating = product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length;
    product.rating = avgRating;
    await product.save();
    res.json({ message: 'Review added', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
