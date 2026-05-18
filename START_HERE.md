# 🚀 RUN YOUR AMAZON CLONE NOW!

## ✅ Complete Setup Done!

All files are ready. Follow these simple steps to run your application.

---

## 🎯 Step-by-Step Instructions

### Prerequisites Check
1. ✅ Node.js installed? → If not, download from https://nodejs.org/
2. ✅ MongoDB running? → Open new terminal and type `mongod`

### Option 1: Automatic Installation (Easiest)

```bash
cd amazon-clone
install.bat
```

This will automatically install all dependencies for backend and frontend.

### Option 2: Manual Installation

**Backend Setup:**
```bash
cd amazon-clone\backend
npm install
```

**Frontend Setup:**
```bash
cd amazon-clone\frontend
npm install
```

---

## ▶️ Run the Application

### Terminal 1 - Start Backend Server

```bash
cd amazon-clone\backend
npm run dev
```

Expected output:
```
✓ MongoDB Connected
✓ Server running on http://localhost:5000
```

### Terminal 2 - Start Frontend App

```bash
cd amazon-clone\frontend
npm run dev
```

Expected output:
```
VITE v4.x.x ready in xxx ms → Local: http://localhost:5173
```

### Terminal 3 - Start MongoDB (if not running)

```bash
mongod
```

---

## 🌐 Open in Browser

Once both servers are running, open your browser and go to:

### **http://localhost:5173**

---

## 🧪 Test Workflow

### 1. Create an Account
- Click **"Register"**
- Fill in: First Name, Last Name, Email, Password
- Click **"Register"**

### 2. Login
- Click **"Login"**
- Enter your email and password
- Click **"Login"**

### 3. Add Test Products
Use this MongoDB command in a new terminal:

```bash
mongo
use amazon-clone
db.products.insertMany([
  {
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation",
    price: 79.99,
    image: "https://via.placeholder.com/300x300?text=Headphones",
    category: "Electronics",
    stock: 50,
    rating: 4.5
  }
])
```

### 4. Browse, Add to Cart, and Checkout!

---

## 🎉 You're All Set!

Your Amazon clone is now running with:
- ✅ User authentication
- ✅ Product browsing
- ✅ Shopping cart
- ✅ Order management
- ✅ Responsive design

**Start building and customizing! 🚀**
