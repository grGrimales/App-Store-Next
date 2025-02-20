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
  