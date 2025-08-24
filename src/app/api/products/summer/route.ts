import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();

    const shirtCategoryId = "68a6ff794de2b0e32135ae4b";
    const products = await Product.find({
      productCategoryId: shirtCategoryId,
    }).populate("productCategoryId");

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching summer shirts:", error);

    // Always return an array, even on error
    return NextResponse.json([], { status: 500 });
  }
}
