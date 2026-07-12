import express from "express"
import fs from "fs/promises";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const filePath = `${process.env.DB_BASE_PATH}/products.json`;

        const fileData = await fs.readFile(filePath, "utf-8");
        const products = JSON.parse(fileData);
        let filteredProducts = products
        console.log(fileData);
        const { inStock } = req.query
        const { maxPrice } = req.query
        const { search } = req.query
        console.log(inStock, maxPrice, search);
        if (inStock) {
            const ifInStock = products.filter((x) => { return x.stock > 0 })
            filteredProducts = ifInStock            
        }
        res.json({
            success: true,
            data: filteredProducts
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            success: false,
            message: "error loading products"
        });
    }
});

export default router;
