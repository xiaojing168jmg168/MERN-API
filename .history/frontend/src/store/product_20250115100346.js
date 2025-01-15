import {create} from "zustand"
export const useProductStore = create((set) =>({
   product:[],
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
    set((state) =>({products:[...state.products, data.data]}))
   }
}));

//This is a globe state, can use it in any components