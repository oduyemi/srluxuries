import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();

    const corporateCategoryId = "68a6ff394de2b0e32135ae48";
    const products = await Product.find({
      productCategoryId: corporateCategoryId,
    }).populate("productCategoryId");

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching corporate wears:", error);

    // Always return an array, even on error
    return NextResponse.json([], { status: 500 });
  }
}
