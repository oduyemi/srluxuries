import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { userId, BlazerTopLength, BlazerShoulder, BlazerChest, BlazerStomach, BlazerSleeve, BlazerBicep } = await req.json();

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 401 });
    }

    if (!BlazerTopLength || !BlazerShoulder || !BlazerChest || !BlazerStomach || !BlazerSleeve || !BlazerBicep) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await User.findByIdAndUpdate(userId, {
      blazerTopLength: BlazerTopLength,
      blazerShoulder: BlazerShoulder,
      blazerChest: BlazerChest,
      blazerStomach: BlazerStomach,
      blazerSleeve: BlazerSleeve,
      blazerBicep: BlazerBicep,
    });

    return NextResponse.json({
      message: "Blazer information registered successfully",
      nextStep: "/next-registration-page",
    }, { status: 201 });
  } catch (error) {
    console.error("Error updating blazer info:", error);
    return NextResponse.json({ message: "Error updating user information" }, { status: 500 });
  }
}
