import express from "express";
const router = express.Router();

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";


router.get("/", getProducts);

router.post("/", createProduct);

router.put("/@path('id')", updateProduct);

router.delete("/@path('id')", deleteProduct);

export default router;