const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


// ROOT
router.get("/", (req, res) => {
  res.send("Welcome to the backend server for SR Luxuries");
});

// ============= GET ALL PRODUCTS =============
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find().populate("category"); 
    console.log("Products:", products);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ============= GET BY CATEGORY =============
// Instead of repeating queries, DRY pattern (single handler)
router.get("/products/:category", async (req, res) => {
  try {
    const { category } = req.params;

    // find category first
    const categoryDoc = await ProductCategory.findOne({ name: new RegExp(`^${category}$`, "i") });
    if (!categoryDoc) {
      return res.status(404).json({ message: `Category '${category}' not found` });
    }

    // find products in that category
    const products = await Product.find({ category: categoryDoc._id });
    console.log(`${category} products:`, products);

    res.json(products);
  } catch (error) {
    console.error(`Error fetching ${req.params.category} products:`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
