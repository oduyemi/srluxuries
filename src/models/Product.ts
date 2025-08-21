import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  _id: mongoose.Types.ObjectId;
  productName: string;
  productCategoryId: mongoose.Types.ObjectId;
  price: number;
  productImage: string;
  productHoverImage: string;
}

const productSchema: Schema<IProduct> = new Schema({
  productName: { type: String, required: true },
  productCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
    required: true,
  },
  price: { type: Number, required: true },
  productImage: { type: String },
  productHoverImage: { type: String },
});

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
