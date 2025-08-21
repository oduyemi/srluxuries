const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
});

module.exports = mongoose.model("ProductCategory", productCategorySchema);
