
# 🛍️ Product Management - Next.js CRUD 🛍️ Next.js Online Store Practice - App-Store-Next



This is a practice project for an online store built with **Next.js 15** and **TypeScript**.  
The project demonstrates different **data-fetching strategies** in Next.js, integrating the **Platzi API** for products.  

Users can **create, edit, delete, and view products** using **Server-Side Rendering (SSR)** and **Static Generation (SSG)** techniques.  


## 🚀 Features

- **📋 Product List** - View all available products in the store.
- **➕ Create Product** - Add new products with name, price, description, and images.
- **✏️ Edit Product** - Modify product details.
- **🗑️ Delete Product** - Remove products from the database.
- **⚡ Fast Performance** - Uses **Server-Side Rendering (SSR)** for better SEO and performance.
- **🎨 Modern UI** - Styled with **Tailwind CSS**.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2️⃣ Install dependencies
```bash
yarn install
```

### 3️⃣ Run the development server
```bash
yarn dev
```
🔗 **Visit:** `http://localhost:3000/`  

---

## 📂 Project Structure

```
📂 src
│── 📂 app
│   ├── 📂 admin
│   │   ├── page.tsx          # Admin panel (Product list)
│   │   ├── 📂 create
│   │   │   ├── page.tsx      # Create a new product
│   │   ├── 📂 edit
│   │   │   ├── [id]
│   │   │   │   ├── page.tsx  # Edit product page
│── 📂 components
│   ├── 📂 admin
│   │   ├── AdminProductList.tsx # Displays products in the admin panel
│   │   ├── ProductForm.tsx       # Reusable form for Create/Edit
│── 📂 lib
│   ├── products.ts       # API functions (CRUD operations)
│── README.md
```

---

## 🛠️ API Functions (lib/products.ts)

| Function          | Description                              |
|------------------|------------------------------------------|
| `getProducts()`  | Fetches all products (SSR)              |
| `getProduct(id)` | Fetches a single product by ID          |
| `createProduct()`| Sends a POST request to create a product |
| `updateProduct()`| Sends a PUT request to update a product |
| `deleteProduct()`| Sends a DELETE request to remove a product |

---

## ✨ How to Use the Admin Panel?

1️⃣ **Go to the admin page:**  
   📌 **`http://localhost:3000/admin`**  

2️⃣ **Manage Products:**  
   - Click **"+ Add Product"** to create a new product.
   - Click the **✏️ Edit** button to modify an existing product.
   - Click the **🗑️ Delete** button to remove a product.

---

## ✅ To-Do / Next Steps

- ✅ Improve UI with better notifications (e.g., Toast messages).
- ✅ Add validation for product creation/editing.
- 🚀 Implement authentication for admin users.
- 🚀 Add image upload support instead of using URLs.

---

## 🤝 Contributing

Contributions are welcome!  
1. **Fork the repo**  
2. **Create a new branch** (`git checkout -b feature-new`)  
3. **Commit your changes** (`git commit -m "Add new feature"`)  
4. **Push to the branch** (`git push origin feature-new`)  
5. **Open a Pull Request** 🚀  

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use and modify it for your needs. 😊  
