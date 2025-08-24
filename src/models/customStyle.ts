import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface ICustomStyle extends Document {
  phone: string;
  images: string[];
  createdAt: Date;
}

const CustomStyleSchema: Schema<ICustomStyle> = new Schema({
  phone: { type: String, required: true },
  images: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

const CustomStyle: Model<ICustomStyle> =
  mongoose.models.CustomStyle ||
  mongoose.model<ICustomStyle>("CustomStyle", CustomStyleSchema);

export default CustomStyle;
