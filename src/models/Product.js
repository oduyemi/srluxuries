const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
  },
  price: Number,
  productImage: String,
  productHoverImage: String,
});

module.exports = mongoose.model("Product", productSchema);
