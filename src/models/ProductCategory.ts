import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProductCategory extends Document {
  name: string;
  description?: string;
}

const productCategorySchema: Schema<IProductCategory> = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const ProductCategory: Model<IProductCategory> =
  mongoose.models.ProductCategory ||
  mongoose.model<IProductCategory>("ProductCategory", productCategorySchema);

export default ProductCategory;
