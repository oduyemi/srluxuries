import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { userId, TrouserLength, TrouserWaist, TrouserHip, TrouserStomach, TrouserLeg } = await req.json();

    if (!userId) return NextResponse.json({ message: "User ID is required" }, { status: 401 });

    if (!TrouserLength || !TrouserWaist || !TrouserHip || !TrouserStomach || !TrouserLeg) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await User.findByIdAndUpdate(userId, {
      trouserLength: TrouserLength,
      trouserWaist: TrouserWaist,
      trouserHip: TrouserHip,
      trouserStomach: TrouserStomach,
      trouserLeg: TrouserLeg,
    });

    return NextResponse.json({
      message: "Trouser information registered successfully",
      nextStep: "/next-registration-page",
    }, { status: 201 });
  } catch (error) {
    console.error("Error updating trouser info:", error);
    return NextResponse.json({ message: "Error updating user information" }, { status: 500 });
  }
}
