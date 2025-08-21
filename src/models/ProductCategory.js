const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("ProductCategory", productCategorySchema);
