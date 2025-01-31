import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      set({ products: data.data || [] });
    } catch (error) {
      console.error("Fetch products error:", error);
    }
  },

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create product");
      }

      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Product created successfully!" };
    } catch (error) {
      console.error("Create product error:", error);
      return { success: false, message: error.message || "Something went wrong" };
    }
  }
}));
