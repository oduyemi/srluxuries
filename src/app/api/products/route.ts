import { NextRequest, NextResponse } from "next/server";
import {dbConnect} from "@/utils/db"; 
import Product from "@/models/Product";
import ProductCategory from "@/models/ProductCategory";

// ============= GET ALL PRODUCTS =============
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    if (category) {
      // find category first
      const categoryDoc = await ProductCategory.findOne({
        name: new RegExp(`^${category}$`, "i"),
      });

      if (!categoryDoc) {
        return NextResponse.json(
          { message: `Category '${category}' not found` },
          { status: 404 }
        );
      }

      // find products in that category
      const products = await Product.find({ category: categoryDoc._id });
      return NextResponse.json(products);
    }

    // otherwise return all products
    const products = await Product.find().populate("category");
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
