# 🛒 Amazon Clone - Complete Project

## ✅ Project Status: READY TO RUN

Your full-stack Amazon clone is complete with both backend and frontend!

---

## 📁 Project Structure

```
amazon-clone/
├── backend/
│   ├── models/
│   │   ├── User.js          (User authentication model)
│   │   ├── Product.js       (Product model)
│   │   ├── Cart.js          (Shopping cart model)
│   │   └── Order.js         (Order management model)
│   ├── routes/
│   │   ├── auth.js          (Login, Register, Profile)
│   │   ├── products.js      (Browse, Search, Reviews)
│   │   ├── cart.js          (Add, Update, Remove items)
│   │   ├── orders.js        (Create, Track orders)
│   │   ├── admin.js         (Admin dashboard)
│   │   └── payment.js       (Payment processing)
│   ├── middleware/
│   │   └── auth.js          (JWT authentication)
│   ├── server.js            (Express server)
│   ├── package.json
│   ├── .env                 (Configuration)
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx             (Product listing)
│   │   │   ├── ProductDetail.jsx    (Product details)
│   │   │   ├── Cart.jsx             (Shopping cart)
│   │   │   ├── Login.jsx            (User login)
│   │   │   ├── Register.jsx         (User registration)
│   │   │   ├── Checkout.jsx         (Checkout page)
│   │   │   └── Orders.jsx           (Order history)
│   │   ├── context/
│   │   │   └── AuthContext.jsx      (Auth state management)
│   │   ├── api/
│   │   │   └── api.js               (Axios instance)
│   │   ├── App.jsx                  (Main app)
│   │   ├── main.jsx                 (React entry point)
│   │   └── index.css                (TailwindCSS)
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
├── install.bat              (Auto-install script)
├── QUICK_START.md           (Quick start guide)
└── README.md               (This file)
```

---

## 🚀 Quick Start (3 Minutes)

### 1️⃣ Install Dependencies
```bash
cd amazon-clone
install.bat   # Windows automatic installer
```

Or manually:
```bash
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
```

### 2️⃣ Start MongoDB
```bash
mongod
```

### 3️⃣ Run Backend (Terminal 1)
```bash
cd backend
npm run dev
```

### 4️⃣ Run Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```

### 5️⃣ Open Browser
Visit: **http://localhost:5173**

---

## 🎯 Features Implemented

✅ User Authentication (Register/Login/Logout)
✅ JWT Token-based Security
✅ Product Listing with Pagination
✅ Search & Filter by Category
✅ Product Reviews & Ratings
✅ Shopping Cart (Add/Update/Remove)
✅ Checkout Process
✅ Order Management
✅ Order History & Tracking
✅ Admin Dashboard
✅ Product Management (Add/Edit/Delete)
✅ Responsive Design
✅ Error Handling
✅ Input Validation

---

## 🔧 Technology Stack

### Backend
- **Framework**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing
- **CORS**: Enabled for frontend

### Frontend
- **UI Framework**: React 18
- **Build Tool**: Vite (lightning-fast)
- **Routing**: React Router v6
- **Styling**: TailwindCSS
- **HTTP Client**: Axios
- **State Management**: React Context API

---

## 📝 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| PUT | `/api/auth/profile` | Update profile |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products |
| GET | `/api/products/:id` | Get product details |
| POST | `/api/products/:id/reviews` | Add review |

### Shopping Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get user's cart |
| POST | `/api/cart/add` | Add item to cart |
| PUT | `/api/cart/update/:id` | Update item quantity |
| DELETE | `/api/cart/remove/:id` | Remove item |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get user's orders |
| POST | `/api/orders/create` | Create new order |

---

## 🔐 Security Features

✅ Password Hashing (bcryptjs)
✅ JWT Authentication
✅ CORS Protection
✅ Input Validation
✅ Error Handling
✅ Protected Routes

---

## 📊 Database Schema

### Users Collection
```javascript
{
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  address: {
    street, city, state, zipCode, country
  },
  role: String (user/admin),
  createdAt: Date
}
```

### Products Collection
```javascript
{
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  stock: Number,
  rating: Number,
  reviews: Array,
  createdAt: Date
}
```

---

## 🌐 Deployment

### Backend Deployment Options
- Railway.app
- Heroku
- AWS EC2
- DigitalOcean

### Frontend Deployment Options
- Vercel (Recommended for Vite)
- Netlify
- AWS S3 + CloudFront

---

## 🎉 Your Amazon Clone is Ready!

**Next Step: Follow the Quick Start instructions above and start building!**
