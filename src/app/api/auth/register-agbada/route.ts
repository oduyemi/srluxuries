import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const {
      userId,
      AgbadaLength,
      AgbadaBodyLength,
      AgbadaChest,
      AgbadaBack,
      AgbadaShortSleeve,
      AgbadaLongSleeve,
      AgbadaNeck,
      AgbadaStomach,
      AgbadaTrouserLength,
      AgbadaTrouserWaist,
      AgbadaLap,
      AgbadaHip,
      AgbadaCalf,
      AgbadaCap,
    } = body;

    if (
      !userId ||
      !AgbadaLength || !AgbadaBodyLength || !AgbadaChest || !AgbadaBack || !AgbadaShortSleeve ||
      !AgbadaLongSleeve || !AgbadaNeck || !AgbadaStomach || !AgbadaTrouserLength ||
      !AgbadaTrouserWaist || !AgbadaLap || !AgbadaHip || !AgbadaCalf || !AgbadaCap
    ) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await User.findByIdAndUpdate(userId, {
      agbadaLength: AgbadaLength,
      agbadaBodyLength: AgbadaBodyLength,
      agbadaChest: AgbadaChest,
      agbadaBack: AgbadaBack,
      agbadaShortSleeve: AgbadaShortSleeve,
      agbadaLongSleeve: AgbadaLongSleeve,
      agbadaNeck: AgbadaNeck,
      agbadaStomach: AgbadaStomach,
      agbadaTrouserLength: AgbadaTrouserLength,
      agbadaTrouserWaist: AgbadaTrouserWaist,
      agbadaLap: AgbadaLap,
      agbadaHip: AgbadaHip,
      agbadaCalf: AgbadaCalf,
      agbadaCap: AgbadaCap,
    });

    return NextResponse.json({
      message: "Agbada information registered successfully",
      nextStep: "redirect to login",
    }, { status: 201 });
  } catch (error) {
    console.error("Error in register-agbada:", error);
    return NextResponse.json({ message: "Error updating user information" }, { status: 500 });
  }
}
