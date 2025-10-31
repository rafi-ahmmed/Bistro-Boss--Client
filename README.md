# 🍽️ Bistro Boss Restaurant - MERN Stack Application

## 📝 Description

**Bistro Boss Restaurant** is a full-featured **MERN Stack restaurant application** where users can browse delicious food items, add them to their cart, and complete secure payments using **Stripe** or **SSLCommerz**.

The system has **role-based access** — **User** and **Admin** — each with specific permissions and dashboards.

---

## 👥 User Features

- 🔍 View all available food items
- 🛒 Add items to cart and manage them
- 💳 Make payments via **Stripe** or **SSLCommerz**
- 📦 View order history after successful payment
- 🔐 Secure login & signup with JWT authentication

---

## 🔧 Admin Features

- 🧾 View all orders and payment statistics
- 🍔 Add, update, or delete food items
- 👥 View all users and manage their roles
- 📈 Dashboard with:
   - Total Food Items
   - Total Orders
   - Total Revenue
   - System Analytics

---

## 🛠️ Technologies Used

### 🧩 Frontend

- **React.js**
- **React Router DOM**
- **Axios**
- **TanStack Query (React Query)**
- **Tailwind CSS + DaisyUI**
- **SweetAlert2**
- **Stripe.js**

### ⚙️ Backend

- **Express.js**
- **MongoDB**
- **JWT Authentication**
- **SSLCommerz Integration**
- **Stripe Payment Gateway**
- **Cors & dotenv**

---

## 🔐 Authentication & Authorization

- User authentication handled via **JWT Tokens**.
- Protected routes for both **User** and **Admin**.
- Admin panel secured with role-based authorization.

---

## 💵 Payment Gateways

This project supports **two secure payment methods**:

1. **Stripe** – for global payments
2. **SSLCommerz** – for Bangladeshi users

Each payment triggers a validation process and stores the transaction result in MongoDB.

---

## 🔗 Live Links

🌐 **Live Website:** [Click Here](https://bistro-boss-client-gamma.vercel.app)
