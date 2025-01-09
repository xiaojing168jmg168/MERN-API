import express from "express";
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { updateProduct, createProduct, getProducts, updateProduct } from "../controllers/product.controller.js";


const router = express.Router();


router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id",async(req,res) =>{
    const {id} = req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product delete"});
    }catch(error){
        console.log("error in deleting product:", error.message);
        res.status(404).json({success:false, message:"Product not found"});
    }
})

export default router;