import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();

    const beltsCategoryId = "68a6fef94de2b0e32135ae46";
    const products = await Product.find({
      productCategoryId: beltsCategoryId,
    }).populate("productCategoryId");

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching belts:", error);

    // Always return an array, even on error
    return NextResponse.json([], { status: 500 });
  }
}
