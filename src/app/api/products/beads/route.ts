import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();

    const beadsCategoryId = "68a6fece4de2b0e32135ae45";
    const products = await Product.find({
      productCategoryId: beadsCategoryId,
    }).populate("productCategoryId");

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching beads:", error);

    // Always return an array, even on error
    return NextResponse.json([], { status: 500 });
  }
}
