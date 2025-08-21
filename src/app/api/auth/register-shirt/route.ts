import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { userId, ShirtLength, ShirtChest, ShirtShoulder, ShirtSleeve, ShirtStomach, ShirtCollar } = await req.json();

    if (!userId) return NextResponse.json({ message: "User ID is required" }, { status: 401 });

    if (!ShirtLength || !ShirtChest || !ShirtShoulder || !ShirtSleeve || !ShirtStomach || !ShirtCollar) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await User.findByIdAndUpdate(userId, {
      shirtLength: ShirtLength,
      shirtChest: ShirtChest,
      shirtShoulder: ShirtShoulder,
      shirtSleeve: ShirtSleeve,
      shirtStomach: ShirtStomach,
      shirtCollar: ShirtCollar,
    });

    return NextResponse.json({
      message: "Shirt information registered successfully",
      nextStep: "/next-registration-page",
    }, { status: 201 });
  } catch (error) {
    console.error("Error updating shirt info:", error);
    return NextResponse.json({ message: "Error updating user information" }, { status: 500 });
  }
}
