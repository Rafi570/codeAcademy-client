# Code Academy — Next.js (App Router) + Express.js

**Live Demo:** [https://code-academy-rosy.vercel.app/](https://code-academy-rosy.vercel.app/)
**GitHub Repo:** [https://github.com/Rafi570/codeAcademy-client.git](https://github.com/Rafi570/codeAcademy-client.git)


---

## 📌 Project Overview

Code Academy is a clean, responsive web application built using **Next.js (App Router)** with authentication powered by **NextAuth.js** and a simple **Express.js** backend.

The project includes:

* Public pages: Landing, Item List, Item Details
* Protected pages: **Add Product**, **Manage Products**
* Authentication: Google OAuth + Credentials
* API connection with Express backend
* Focus on polished UI, responsiveness, and consistent layout

---

## 🚀 Features

### 🔓 Public Pages

* **Landing Page**

  * Sticky Navbar with 4+ routes
  * Hero section
  * 4 additional themed sections
  * Clean cards, hover states, responsive layout
  * Footer with links + social icons

* **Item List Page**

  * Page title + short description
  * Search bar & optional filters (UI only)
  * Grid of at least 6 cards
    Each card includes:
    • Image
    • Title
    • Short description
    • Price/meta
    • Details button

* **Item Details Page**

  * Large banner image
  * Product title
  * Full description
  * Meta info (price/date/priority)
  * Back button

### 🔐 Protected Pages (Require Login)

* **Add Product**

  * Redirects unauthenticated users to `/login`
  * Form fields: title, short description, full description, price/date/priority, optional image URL
  * Submit button + success toast

* **Manage Products**

  * List all products in table/grid format
  * Actions: View, Delete
  * Clean and responsive UI

### 🔑 Authentication

* NextAuth.js (Google + Credentials)
* After login:

  * Navbar shows user dropdown
  * Access to Add Product & Manage Products

---

## 📂 Routes Summary

### Frontend (Next.js)

| Route              | Description                     |
| ------------------ | ------------------------------- |
| `/`                | Landing Page                    |
| `/login`           | Login / Register                |
| `/items`           | Item List Page                  |
| `/items/[id]`      | Item Details Page               |
| `/add-product`     | **Protected** — Add Product     |
| `/manage-products` | **Protected** — Manage Products |
| `/api/auth/*`      | Auth (NextAuth internal routes) |

### Backend (Express)

| Route                      | Description       |
| -------------------------- | ----------------- |
| `GET /api/products`        | Get all products  |
| `GET /api/products/:id`    | Get product by ID |
| `POST /api/products`       | Add product       |
| `DELETE /api/products/:id` | Delete product    |

---

## 🔧 Environment Variables

### Frontend (`.env.local`)

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_API_BASE=http://localhost:5000/api
```

### Backend (`.env`)

```
PORT=5000
MONGODB_URI=your_mongodb_uri

```

---

## 🛠️ Setup & Installation

### Frontend

```bash
git clone https://github.com/Rafi570/codeAcademy-client.git
cd codeAcademy-client
npm install
npm run dev
```

App runs at:
👉 [http://localhost:3000](http://localhost:3000)

### Backend

(If provided separately)

```bash
npm install
npm start
```

---

## 📜 Additional Notes

* Designed with a polished, consistent, responsive UI
* Uses a modular layout and reusable components
* Followed all requirements from the assignment (landing page, auth, protected pages, items, CRUD)

---

If you need a **backend README**, **folder structure**, or **demo screenshots section**, just tell me!
