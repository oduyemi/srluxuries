import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/User";
import crypto from "crypto";

// ===== Utilities =====
async function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");
  return { salt, hashedPassword: hash.toString("hex") };
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    // Get payload directly
    const payload = await req.json();
    const {
      name,
      phone,
      password,
      confirmPassword,
      address,
      blazerTopLength,
      blazerShoulder,
      blazerChest,
      blazerStomach,
      blazerSleeve,
      blazerBicep,
      trouserLength,
      waist,
      hip,
      trouserStomach,
      leg,
      shirtLength,
      chest,
      shoulder,
      sleeve,
      stomach,
      collar,
      suitLength,
      roundBody,
      sleeveSuit,
      back,
      roundSleeve,
      trouserLengthSuit,
      trouserWaist,
      lap,
      hipSuit,
      calf,
      ankle,
      agbadaLength,
      agbadaBodyLength,
      agbadaChest,
      chestAgbada,
      backAgbada,
      shortSleeve,
      longSleeve,
      neck,
      stomachAgbada,
      trouserLengthAgbada,
      trouserWaistAgbada,
      lapAgbada,
      hipAgbada,
      calfAgbada,
      cap,
    } = payload;

    // ===== Validation =====
    if (!name || !phone || !password || !confirmPassword || !address) {
      return NextResponse.json(
        { message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Both passwords must match!" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return NextResponse.json(
        { message: "Phone number already registered" },
        { status: 400 }
      );
    }

    const { hashedPassword, salt } = await hashPassword(password);

    // ===== Save User =====
    const newUser = await User.create({
      name,
      phone,
      password: hashedPassword,
      salt,
      address,

      // Measurements
      blazerTopLength,
      blazerShoulder,
      blazerChest,
      blazerStomach,
      blazerSleeve,
      blazerBicep,
      trouserLength,
      waist,
      hip,
      trouserStomach,
      leg,
      shirtLength,
      chest,
      shoulder,
      sleeve,
      stomach,
      collar,
      suitLength,
      roundBody,
      sleeveSuit,
      back,
      roundSleeve,
      trouserLengthSuit,
      trouserWaist,
      lap,
      hipSuit,
      calf,
      ankle,
      agbadaLength,
      agbadaBodyLength,
      agbadaChest,
      chestAgbada,
      backAgbada,
      shortSleeve,
      longSleeve,
      neck,
      stomachAgbada,
      trouserLengthAgbada,
      trouserWaistAgbada,
      lapAgbada,
      hipAgbada,
      calfAgbada,
      cap,
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: newUser._id,
          name,
          phone,
          address,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { message: "Error registering user" },
      { status: 500 }
    );
  }
}
