import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();

    const footCategoryId = "68a6ff574de2b0e32135ae49";
    const products = await Product.find({
      productCategoryId: footCategoryId,
    }).populate("productCategoryId");

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching footwears:", error);

    // Always return an array, even on error
    return NextResponse.json([], { status: 500 });
  }
}
