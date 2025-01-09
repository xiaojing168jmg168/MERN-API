import express from "express";
const router = express.Router();

router.get("/api/products", async(req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    }catch(error){
        console.error("Error in Fetch products:", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
});

router.post("/api/products", async(req, res) =>{
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

});

router.put("/api/products/:id", async(req,res) =>{
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

router.delete("/api/products/:id",async(req,res) =>{
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