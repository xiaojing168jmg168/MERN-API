import express from "express";
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { getProducts } from "../controllers/product.controller.js";
import { createProduct } from  "../controllers/product.controller.js";

const router = express.Router();


router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", async(req,res) =>{
    const {id} = req.params;
    const product = req.body;
    const {Types: {ObjectId}} = mongoose;

    const validateObjectId = (id) => ObjectId.isValid(id) && (new 
    ObjectId(id)).toString() === id;
    if(!validateObjectId){
        return res.status(404).json({success: false, message:"Invalid Product Id"});
    }
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success: true, data: updatedProduct});
    }catch(error){
res.status(500).json({success:false, message: "Server Error"});
    }
})

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