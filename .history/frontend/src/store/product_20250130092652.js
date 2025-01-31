import {create} from "zustand"
export const useProductStore = create((set) =>({
   products:[],
   setProducts: (products) => set({products}),
   createProduct: async (newProduct) =>{
    if(!newProduct.name || !newProduct.image || !newProduct.price){
        return {success:false, message:"Please fill in all fields."}
    }
    const res = await fetch("api/products", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newProduct)
    })
    const data = await res.json();
    set((state) =>({ products: [...state.products, data.data] }));
    return {success: true, message:"Product created successfully!"}
   },
//    fetchProducts: async()=>{
//     const res = await fetch("/api/products");
//     const data = await res.json();
//     set({products: data.data});
//    }
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

}));

//This is a globe state, can use it in any components