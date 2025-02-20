
# 🛍️ Next.js Online Store Practice - App-Store-Next
ah 

This is a practice project for an online store built with **Next.js 15** and **TypeScript**. The project demonstrates different **data-fetching strategies** in Next.js, integrating the **Platzi API** for products.  

## 🚀 Features  
✅ **Home Page (SSR)** – Fetches product data server-side using `{ cache: "no-store" }`.  
✅ **Product Detail Page (SSG)** – Uses `{ next: { revalidate: 60 } }` for static generation with revalidation.  
✅ **Dynamic Routing** – Generates product pages dynamically.  
✅ **Admin Components** – Initial setup for future admin features.  
✅ **Reusable API Calls** – Separated API logic into `lib/products.ts` for better maintainability.  

## 🛠️ Tech Stack  
- **Next.js 14** (App Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **React Icons**  
- **Platzi API** (`https://api.escuelajs.co/api/v1/products`)  

## 📦 Installation  

1️⃣ Clone the repository:  
```bash
git clone https://github.com/your-username/your-repo-name.git
```

2️⃣ Install dependencies:  
```bash
yarn install
```

3️⃣ Run the development server:  
```bash
yarn dev
```

4️⃣ Open the app:  
```
http://localhost:3000
```

## 📂 Project Structure  
```
/app
  ├── page.tsx  # Home page (SSR)
  ├── product/[id]/page.tsx  # Product detail page (SSG)
  ├── admin/  # Admin components (to be developed)
/components
  ├── product/ProductCard.tsx
  ├── product/ProductDetail.tsx
/lib
  ├── products.ts  # API calls (getProducts, getProduct)
```

## 📌 Next Steps  
- Implement admin panel for product management.  
- Add authentication (Auth.js, NextAuth, or Firebase).  
- Enhance UI with animations and better design.  

---

🔹 **Contributions & Issues:** Feel free to open an issue or submit a pull request! 🚀  

---

### 📜 License  
This project is open-source and available under the **MIT License**.  

---

