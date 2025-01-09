import mongoose from "mongoose";
import Product from "../models/product.model";

export const getProducts = async(req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    }catch(error){
        console.error("Error in Fetch products:", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const createProduct = async(req, res) =>{
    const product = req.body; // user will send this data
    
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:"Please provide all fields"});
    }
const newProduct = new Product(product);
try{
    await newProduct.save();
    res.status(201).json({success:true, data: newProduct});
}catch(error){
    console.error("Error in Create product:", error.message);
res.status(500).json({success: false, message:"Server Error"});
}

}