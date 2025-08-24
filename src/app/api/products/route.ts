import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Product from "@/models/Product";
import ProductCategory from "@/models/ProductCategory";


export const dynamic = "force-dynamic"; // 🚀 prevents static generation
// ============= GET ALL PRODUCTS =============
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    let products;
    if (category) {
      const categoryDoc = await ProductCategory.findOne({
        name: new RegExp(`^${category}$`, "i"),
      }).lean();

      if (!categoryDoc) {
        return NextResponse.json(
          { message: `Category '${category}' not found` },
          { status: 404 }
        );
      }

      products = await Product.find({
        productCategoryId: categoryDoc._id,
      })
        .populate("productCategoryId")
        .lean();
    } else {
      products = await Product.find().populate("productCategoryId").lean();
    }

    return NextResponse.json({ data: products }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
