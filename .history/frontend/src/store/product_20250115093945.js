import {create} from "zustand"
export const useProductStore = create((set) =>({
   product:[],
   setProducts: (products) => set({products}),
}));

//This is a globe state, can use it in any components