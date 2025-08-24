import mongoose from "mongoose";
import User from "@/models/User";
import Appointment from "@/models/Appointment";
import Product from "@/models/Product";
import ProductCategory from "@/models/ProductCategory";
import CustomStyle from "@/models/customStyle";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/srldb";

let isConnected = false;

export async function dbConnect() {
  if (isConnected || mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("✅ Connected to MongoDB");
    await Promise.all([
      User.init(),
      Appointment.init(),
      Product.init(),
      ProductCategory.init(),
      CustomStyle.init()
    ]);

    console.log("✅ Collections initialized: User, Appointment, Product, ProductCategory");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}
