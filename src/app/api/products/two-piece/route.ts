import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();

    const summerCategoryId = "68a6ff794de2b0e32135ae4b";
    const products = await Product.find({
      productCategoryId: summerCategoryId,
    }).populate("productCategoryId");

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching summer wears:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
