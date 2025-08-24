import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICustomStyle extends Document {
  phone: string;            // User's WhatsApp number
  style: string;            // Style name/title
  description: string;      // Short description
  additionalInfo?: string;  // Extra details (optional)
  images: string[];         // Uploaded Cloudinary URLs
  createdAt: Date;
}

const CustomStyleSchema: Schema<ICustomStyle> = new Schema(
  {
    phone: { type: String, required: true },
    style: { type: String, required: true },
    description: { type: String, required: true },
    additionalInfo: { type: String },
    images: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const CustomStyle: Model<ICustomStyle> =
  mongoose.models.CustomStyle ||
  mongoose.model<ICustomStyle>("CustomStyle", CustomStyleSchema);

export default CustomStyle;
