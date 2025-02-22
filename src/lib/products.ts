export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
  }
  
  export async function getProducts(): Promise<Product[]> {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      cache: "no-store", 
    });
  
    if (!res.ok) {
      throw new Error("Error al obtener los productos");
    }
  
    return res.json();
  }
  



  export async function getProduct(id: string): Promise<Product | null> {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      next: { revalidate: 60 },
    });
  
    if (!res.ok) return null;
  
    return res.json();
  }
  


  export async function createProduct(product: { title: string; price: number; description: string; images: string[] }) {
    const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: product.title,
        price: product.price,
        description: product.description,
        images: product.images,
        categoryId: 1, 
      }),
    });
  
    if (!res.ok) {
      throw new Error("Failed to create product");
    }
  
    return res.json();
  }
  


  export async function deleteProduct(id: number): Promise<boolean> {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: "DELETE",
    });
  
    return res.ok;
  }
  


  export async function updateProduct(id: string, product: { title: string; price: number; description: string; images: string[] }) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  
    if (!res.ok) {
      throw new Error("Failed to update product");
    }
  
    return res.json();
  }