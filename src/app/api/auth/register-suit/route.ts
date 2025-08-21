import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    // Parse body
    const body = await req.json();
    const {
      userId, 
      SuitLength,
      SuitBody,
      SuitSleeve,
      SuitBack,
      SuitRoundSleeve,
      SuitTrouserLength,
      SuitTrouserWaist,
      SuitLap,
      SuitHip,
      SuitCalf,
      SuitAnkle,
    } = body;

    // Validate
    if (
      !userId ||
      !SuitLength || !SuitBody || !SuitSleeve || !SuitBack || !SuitRoundSleeve ||
      !SuitTrouserLength || !SuitTrouserWaist || !SuitLap || !SuitHip || !SuitCalf || !SuitAnkle
    ) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Update
    await User.findByIdAndUpdate(userId, {
      suitLength: SuitLength,
      suitBody: SuitBody,
      suitSleeve: SuitSleeve,
      suitBack: SuitBack,
      suitRoundSleeve: SuitRoundSleeve,
      suitTrouserLength: SuitTrouserLength,
      suitTrouserWaist: SuitTrouserWaist,
      suitLap: SuitLap,
      suitHip: SuitHip,
      suitCalf: SuitCalf,
      suitAnkle: SuitAnkle,
    });

    return NextResponse.json({
      message: "Suit information registered successfully",
      nextStep: "/next-registration-page",
    }, { status: 201 });
  } catch (error) {
    console.error("Error in register-suit:", error);
    return NextResponse.json({ message: "Error updating user information" }, { status: 500 });
  }
}
